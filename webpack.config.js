const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'New Project',
        minify: {
            collapseWhitespace: true
        },
        hash: true,
        template: './src/index.html'
    }),
    new ExtractTextPlugin("app.css")
    ]
}