'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    context: __dirname + '/',
    entry: {
        main: './js/apiFetch'
    },
    output: {
        path: __dirname + "/dist",
        filename: "index.js"
    },
//    watch: true,
//    watchOptions: {
//        aggregateTimeout: 100
//    },
    resolve: {
        extensions: ['','.js', '.css']
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

    plugins: [
        new ExtractTextPlugin("index.css")
    ]
}