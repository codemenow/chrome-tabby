/*
 ./webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './tabby.html',
    filename: 'tabby.html',
    inject: 'body'
});
const ExtractTextPlugin = require('mini-css-extract-plugin');
const extractTextPlugin = new ExtractTextPlugin('src/styles/tabby.less');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve('dist'),
        filename: 'app_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.less$/,
                use: [ExtractTextPlugin.loader, 'css-loader','less-loader']
            }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, extractTextPlugin]
};