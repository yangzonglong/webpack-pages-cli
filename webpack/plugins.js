/**
 * 插件
 */
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require('extract-text-webpack-plugin');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const pageArr = require('./pages');
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let plugins = [];

// 输出页面
pageArr.forEach(item => {
    plugins.push(new htmlWebpackPlugin({
        filename: `${item}.html`,
        template: `src/pages/${item}/app-temp.js`,
        chunks: [`static-${process.env.npm_package_version}/${item}/`, `static-${process.env.npm_package_version}/common/common`],
        hash: false,
        xhtml: true
    }))
})

// 配置全局变量
plugins.push(new webpack.DefinePlugin({
    _ENV_: `"${process.env.ENV}"`
}))

// 压缩css
plugins.push(new uglifyJSPlugin())

// 抽离css
plugins.push(new extractTextPlugin({ filename: '[name].min.css', allChunks: true })) // 抽离css

// 分离公共js
plugins.push(new webpack.optimize.CommonsChunkPlugin({
    name: `static-${process.env.npm_package_version}/common/common`,
    minChunks: function (module, count) {
        return module.resource && (/js/).test(module.resource) && count > 2
    }
}))

// 处理提取css重复问题
plugins.push(new optimizeCssAssetsPlugin({
    assetNameRegExp: /\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorOptions: { discardComments: { removeAll: true }, safe: true },
    canPrint: true
}))

module.exports = plugins