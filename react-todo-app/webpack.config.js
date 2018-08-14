const path = require('path');

module.exports = {
    entry: path.resolve('src', 'index.js'),
    output: {
        path: path.resolve('build'),
        publicPath: 'build',
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                exclude: /\.print\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.less$/,
                include: /\.print\.less$/,
                use: ['css-to-string-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.(png|svg|ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            }
        ]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx'],
    }
};