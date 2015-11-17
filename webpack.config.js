var webpack = require('webpack'),
        path = require("path"),
        ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve('js'),
    entry: './app',
    output: {
        path: path.resolve('build/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: "url-loader?limit=10000"
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=8192'// inline base64 URLs for <=8k images, direct URLs for the rest
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Backbone: "backbone",
            _: "underscore"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};