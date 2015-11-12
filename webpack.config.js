var path = require("path");
module.exports = {
    context: path.resolve('js'),
    entry: './app',
    output: {
        path: path.resolve('build/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf$/, loader: "file-loader"},
            {test: /\.eot$/, loader: "file-loader"},
            {test: /\.svg$/, loader: "file-loader"},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, exclude: /node_modules/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg)$/, exclude: /node_modules/, loader: 'url-loader?limit=8192'} // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    },
    resolve: {
        extensions: ['', '.js']
    }
};