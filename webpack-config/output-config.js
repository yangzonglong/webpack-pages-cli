const path = require('path');
module.exports = {
    path: path.resolve(__dirname, './../build'),
	filename: '[name].min.js',
	publicPath: '/' // 静态资源路径
}