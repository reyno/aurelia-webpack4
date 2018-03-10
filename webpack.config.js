const path = require("path");
const webpack = require("webpack");
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { AureliaPlugin } = require("aurelia-webpack-plugin");

module.exports = {
    entry: {
        app: 'aurelia-bootstrapper'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    resolve: {
        extensions: ['.ts', '.js'],
        modules: [path.resolve(__dirname, "src"), 'node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts$/i,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/i,
                use: [{
                    loader: 'html-loader',
                    options: { minimize: true }
                }]
            }
        ]
    },
    optimization: {
        // minimize: false,
        // minimizer: [
        //     new UglifyJsWebpackPlugin({
        //         parallel: true,
        //         sourceMap: true
        //     }),
        // ],
        splitChunks: { chunks: 'all' }
    },
    plugins: [
        new AureliaPlugin({
            aureliaApp: 'index'
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};

