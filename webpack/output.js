const path = require('path');
module.exports = {
    path: path.resolve(__dirname, './../build'),
	filename: '[name].min.js',
	publicPath: '/', // 静态资源路径
	chunkFilename: `static-${process.env.npm_package_version}/common/[name].min.js`
}