const path = require('path');

module.exports = {
    entry: {
        app1: './code-splitting-with-entry-points/app1.js',
        app2: './code-splitting-with-entry-points/app2.js'
    },
    output: {
        filename: '[name].compiled.js',
        path: path.resolve(__dirname, 'dist'),
    },
};