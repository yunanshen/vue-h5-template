const path = require("path");
module.exports = {
    lintOnSave: true,

    devServer: {
        proxy: {
            // proxy all requests starting with /api to jsonplaceholder
            '/api': {
                target: 'http://localhost:8080',   //代理接口
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/mock'    //代理的路径
                }
            }
        }
    },
    pluginOptions: {
        "style-resources-loader": {
            preProcessor: "less",
            patterns: [path.resolve(__dirname, "./src/assets/less/reset.less"), path.resolve(__dirname, "./src/assets/less/public.less")]
        }
    }
}
