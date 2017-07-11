const extractTextPlugin = require('extract-text-webpack-plugin');
module.exports = [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }, {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: 'ejs-loader'
    },
    {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader']
        })
    },
    {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
        })
    }
]