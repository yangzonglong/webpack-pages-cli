const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pageArr = require('./pages-config');
let plugins = [];
pageArr.forEach(item => {
    plugins.push(new htmlWebpackPlugin({
        filename: `${item}.html`,
        template: `src/pages/${item}/app-temp.js`,
        chunks: [`static/${item}/`, 'static/common/common'],
        hash: true,
        xhtml: true
    }))
})
// 压缩JS
if(process.env.MINCSSJS){
    plugins.push(new uglifyJSPlugin())
}
plugins.push(new extractTextPlugin('[name].css')) // 抽离css
plugins.push(new webpack.optimize.CommonsChunkPlugin({ // 分离共用js css
    name: 'static/common/common',
    minChunks:2
 }))
module.exports = plugins