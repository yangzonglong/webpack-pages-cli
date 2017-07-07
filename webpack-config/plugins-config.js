const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const pageArr = require('./pages-config');
let plugins = [];
pageArr.forEach(item => {
    plugins.push(new htmlWebpackPlugin({
        filename: `${item}.html`,
        template: `src/pages/${item}/app-temp.js`,
        chunks: [`static/${item}/`, 'static/common'],
        hash: true,
        xhtml: true
    }))
})
plugins.push(new extractTextPlugin('[name].css')) // 抽离css
plugins.push(new webpack.optimize.CommonsChunkPlugin('static/common')) // 分离共用js
module.exports = plugins