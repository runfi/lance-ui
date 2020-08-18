let path = require("path");

//去console插件
const TerserPlugin = require("terser-webpack-plugin");
//gzip压缩插件
const CompressionWebpackPlugin = require("compression-webpack-plugin");
//打包分析
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const cdnPlugin = require("webpack-cdn-plugin");

const HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
    return path.join(__dirname, dir);
}

let externals = {
    vue: "Vue",
    axios: "axios",
    "element-ui": "ELEMENT",
    "vue-router": "VueRouter",
    vuex: "Vuex",
    echarts: "echarts",
    "vue2-editor": "VueEditor",
};

module.exports = {
    // title: "adminnn",
    //基本路径
    publicPath: "/dist/",
    //输出文件目录
    outputDir: "dist",
    //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    assetsDir: "static",
    //生产环境不需要生产map文件
    productionSourceMap: false,
    chainWebpack: config => {
        //这里是对环境的配置，不同的环境对应不同的BASE_URL
        config.plugin("define").tap(args => {
            args[0]["process.env"].VUE_APP_LOGOUT_URL = JSON.stringify(process.env.VUE_APP_LOGOUT_URL);
            console.log(args[0]);
            return args;
        });
        //只在生产环境生效
        if (process.env.VUE_APP_CURRENTMODE === "production") {
            config.externals(externals);
            config.optimization.minimize(true);
            config.optimization.splitChunks({
                chunks: "all",
                cacheGroups: {
                    public: {
                        name: "public",
                        test: resolve("src/components"),
                        minSize: 0, //表示在压缩前的最小模块大小,默认值是 30kb
                        minChunks: 2, // 最小公用次数
                        priority: 5, // 优先级
                        reuseExistingChunk: true, // 公共模块必开启
                    },
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10,
                    },
                },
            });
        }
        //设置别名
        config.resolve.alias
            .set("@", resolve("src"))
            .set("@assets", resolve("src/assets"))
            .set("@scss", resolve("src/assets/scss"));
        // .set("vue", resolve("vue/dist/vue.js"));
    },
    //  webpack插件配置
    configureWebpack: config => {
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: "text-loader", // 解决ivew组件 忽略前缀i的问题
                    options: {
                        prefix: false,
                    },
                },
            ],
        });
        //生产环境插件
        let pluginsPro = [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    compress: {
                        drop_console: true,
                        drop_debugger: true,
                    },
                },
            }),
            new CompressionWebpackPlugin({
                filename: "[path].gz[query]",
                algorithm: "gzip",
                test: new RegExp("\\.(" + ["js", "css"].join("|") + ")$"),
                threshold: 10240,
                minRatio: 0.8,
            }),
            // new BundleAnalyzerPlugin(),
        ];
        //通用插件
        let plugins = [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "index.html",
                inject: true,
            }),
        ];

        if (process.env.VUE_APP_CURRENTMODE !== "development") {
            config.plugins = [...config.plugins, ...pluginsPro];
        }
        config.plugins = [...config.plugins, ...plugins];
    },
    devServer: {
        port: 8699, // 端口
        open: false, // 自动开启浏览器
        compress: true, // 开启压缩
        overlay: {
            warnings: false,
            errors: true,
        },
    },
    //定义scss全局变量
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/styles/common.scss";`,
            },
        },
    },
};
