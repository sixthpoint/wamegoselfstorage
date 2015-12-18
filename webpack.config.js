var webpack = require('webpack'),
        path = require("path"),
        ExtractTextPlugin = require('extract-text-webpack-plugin'),
        node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
    context: path.resolve('js'),
    entry: {
        app: './app',
    },
    output: {
        path: path.resolve('build/'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(otf|eot|png|jpg|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                exclude: [node_modules_dir],
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.ejs$/,
                exclude: [node_modules_dir],
                loader: "ejs-loader"
            },
            {
                test: /\.less$/,
                exclude: [node_modules_dir],
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
            },
            {
                test: /\.css$/,
                exclude: [node_modules_dir],
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            }
        ]
    },
    plugins: [new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Backbone: "backbone",
            "Backbone.Validation": "backbone-validation",
            _: "underscore",
            google: "google-maps"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};