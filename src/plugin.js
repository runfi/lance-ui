import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atelier-estuary-light.css";
import javascript from "highlight.js/lib/languages/javascript.js";
import xml from "highlight.js/lib/languages/xml.js";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);

export default {
    install(Vue) {
        const rendererMD = new marked.Renderer();
        marked.setOptions({
            renderer: rendererMD,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
        });
        Vue.prototype.$marked = marked;

        Vue.directive("highlight", {
            bind(el) {
                let blocks = el.querySelectorAll("code");
                Array.prototype.forEach.call(blocks, block => {
                    hljs.highlightBlock(block);
                });
            },
        });
    },
};
