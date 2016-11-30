'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

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
    resolve: {
        extensions: ['', '.js', '.css', '.less'],
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
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            },
        ]
    },
    devServer: {
        host: 'localhost',
        port: 8090
    },
    watch: NODE_ENV === 'development',
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV === 'development' ? 'eval' : 'source-map',
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(NODE_ENV === 'production')
        })
    ]
}