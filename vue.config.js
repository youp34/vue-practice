module.exports = {
    outputDir: 'dist',
    assetsDir: 'assets',
    lintOnSave: false,
    devServer: {
        host: "localhost",
        port: '8081',
        https: false,
        proxy: {
            '/ccut': {
                target: 'http://123.57.246.74:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/ccut': ''
                }
            }
        },
    }
}
