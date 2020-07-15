const path = require("path");
module.exports = {
    // lintOnSave: true,
    // publicPath: './',
    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/menhu': {
                target: 'http://192.168.17.17:7070',   //代理接口
                // target: 'http://192.168.1.22:8083',   //代理接口
                changeOrigin: true,
                // pathRewrite: {
                //     '^/menhu': '/'    //代理的路径
                // }
            },
            'menhu/upload': {
                target: 'http://192.168.17.4:7010',
                // target: 'http://127.0.0.1:8083/',
                changeOrigin:true
            }
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/less/public.less")]
        }
    },
    // pages:{
    //     index:{
    //         // page 的入口
    //         entry: 'src/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: '泉州打私H5',
    //       }
    // }
}