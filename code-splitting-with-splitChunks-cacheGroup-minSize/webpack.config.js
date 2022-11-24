const path = require('path');

module.exports = {
    entry: {
        app1: './code-splitting-with-splitChunks-cacheGroup-minSize/app1.js',
        app2: './code-splitting-with-splitChunks-cacheGroup-minSize/app2.js'
    },
    output: {
        filename: '[name].compiled.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all',
                    minSize: 20000000000
                },
                libs: {
                    test: /components/,
                    name: 'components',
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1
                },
            },
        },
    },
};