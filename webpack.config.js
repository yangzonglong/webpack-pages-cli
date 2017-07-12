const path = require('path');
const webpack = require('webpack');
const entry = require('./webpack-config/entry-config');
const plugins = require('./webpack-config/plugins-config');
const loaders = require('./webpack-config/loaders-config');
const output = require('./webpack-config/output-config');

const config = {
	entry,
	output,
	devServer: {
		hot: false,
		contentBase: path.resolve(__dirname, 'build'),
		publicPath: '/'
	},
	module: {
		loaders
	},
	plugins,
	devtool: process.env.CREATE_MAP || false
}

module.exports = config