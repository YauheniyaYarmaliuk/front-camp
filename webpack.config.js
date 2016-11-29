'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname + '/',
    entry: {
        index: './js/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        publicPath: '/dist'

    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    },
    resolve: {
        extensions: ['', '.js', '.css'],
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8090
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
}