const path = require('path');
const webpack = require('webpack');

const paths = {};

paths.root = __dirname;
paths.src = path.join(paths.root, 'src');
paths.dist = path.join(paths.root, 'dist');

const entries = {
    'bindr': path.join(paths.src, 'index.ts')
};

module.exports = {
    context: __dirname,
    entry: entries,
    output: {
        path: paths.dist,
        library: '[name]',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['ts-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(html)$/,
                loaders: ['html-loader']
            },
            {
                test: /\.json$/,
                loaders: ['json-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            },
            {
                test: /\.(jpg|jpeg|png|bmp|gif|tiff)/,
                loader: 'file-loader?name=images/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.scss']
    },
    plugins: []
};