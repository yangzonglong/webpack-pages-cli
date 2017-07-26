const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pageArr = require('./pages-config');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let plugins = [];
pageArr.forEach(item => {
    plugins.push(new htmlWebpackPlugin({
        filename: `${item}.html`,
        template: `src/pages/${item}/app-temp.js`,
        chunks: [`static-${process.env.npm_package_version}/${item}/`, `static-${process.env.npm_package_version}/common/common`],
        hash: true,
        xhtml: true
    }))
})
// 压缩JS
if (process.env.MINCSSJS) {
    plugins.push(new uglifyJSPlugin())
}
plugins.push(new extractTextPlugin({ filename: '[name].min.css', allChunks: true })) // 抽离css
plugins.push(new webpack.optimize.CommonsChunkPlugin({ // 分离共用js css
    name: `static-${process.env.npm_package_version}/common/common`,
    minChunks: 3
}))
// 处理提取公共css重复问题
plugins.push(new optimizeCssAssetsPlugin({
    assetNameRegExp: /common\.min\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true } },
    canPrint: true
}))
module.exports = plugins