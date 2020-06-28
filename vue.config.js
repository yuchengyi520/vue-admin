// Vue.config.js 配置选项

module.exports = {

    publicPath: "./",

    outputDir: "dist",

    assetsDir: "static",

    indexPath: "index.html",

    //文件名哈希

    filenameHashing: true,

    //用于多页配置，默认是 undefined

    pages: {

        index: {

            // page 的入口文件

            entry: 'src/main.js',
        },

        // 当使用只有入口的字符串格式时，

        // 模板文件默认是 `public/subpage.html`

        // 如果不存在，就回退到 `public/index.html`。

        // 输出文件默认是 `subpage.html`。

    },



    lintOnSave: true,



    runtimeCompiler: false,



    transpileDependencies: [ /* string or regex */ ],



    productionSourceMap: true,



    crossorigin: "",


    integrity: false,



    configureWebpack: () => {}, //(Object | Function)

    chainWebpack: () => {},

    // 配置 webpack-dev-server 行为。

    devServer: {

        // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

        proxy: {

            '/api': {

                target: "https://api.github.com/",

                changeOrigin: true,

                secure: false,

                pathRewrite: {

                    "^/api": ""

                }

            },
            'devApi': {
                target: "http://in.qadcif.cgv.cn",

                changeOrigin: true,

                secure: false,

                pathRewrite: {

                    "^/devApi": ""

                }
            },

            '/foo': {

                target: '<other_url>'

            }

        }, // string | Object

        before: app => {}

    },

    // CSS 相关选项

    css: {

        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
        extract: true,
        // 是否开启 CSS source map？
        sourceMap: false,
        // 为预处理器的 loader 传递自定义选项。比如传递给
        // Css-loader 时，使用 `{ Css: { ... } }`。
        loaderOptions: {
            sass: {
                data: `@import "./src/styles/main.scss";`
            }
        },
        // 为所有的 CSS 及其预处理文件开启 CSS Modules。
        // 这个选项不会影响 `*.vue` 文件。
        modules: false
    },

    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader`

    // 在多核机器下会默认开启。

    parallel: require('os').cpus().length > 1,

    // PWA 插件的选项。

    // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md

    pwa: {},

    // 三方插件的选项

    pluginOptions: {

        // ...

    }

}
