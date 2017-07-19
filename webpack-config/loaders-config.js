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
    test: /\.(png|jpg|gif)$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=10240'
},
{
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: extractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','sass-loader']
    })
}
]