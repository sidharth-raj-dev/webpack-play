const path = require('path');

module.exports = {
    entry: './basic-setup/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};