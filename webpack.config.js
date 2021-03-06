const path = require('path');
const webpack = require('webpack');
const entry = require('./webpack/entry');
const plugins = require('./webpack/plugins.dev');
const loaders = require('./webpack/loaders.dev');
const output = require('./webpack/output');
const alias = require('./webpack/alias');

const config = {
	entry,
	output,
	module: {
		loaders
	},
	plugins,
	resolve: {
		alias
	}
}

module.exports = config