module.exports = {
    presets: [
        "@vue/app",
        // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码
        ["@babel/preset-env", { modules: false }],
    ],
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        "@babel/plugin-proposal-function-sent",
        "@babel/plugin-proposal-export-namespace-from",
        "@babel/plugin-proposal-numeric-separator",
        "@babel/plugin-proposal-throw-expressions",
        "@babel/plugin-transform-runtime",
        "transform-vue-jsx",
    ],
};
