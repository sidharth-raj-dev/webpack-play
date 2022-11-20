const path = require('path');

module.exports = {
    entry: {
        app1: './code-splitting-with-splitChunks/app1.js',
        app2: './code-splitting-with-splitChunks/app2.js'
    },
    mode: 'development',
    output: {
        filename: '[name].compiled.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/](redux)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                }
            }
        },
    },
};