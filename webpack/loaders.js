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
        use: ['css-loader?minimize=true']
    })
},
{
    test: /\.(png|jpg|gif)$/,
    exclude: /node_modules/,
    loader: `url-loader?limit=10240&name=static-${process.env.npm_package_version}/imgs/[name].[ext]`
},
{
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: extractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?minimize=true','sass-loader']
    })
}
]