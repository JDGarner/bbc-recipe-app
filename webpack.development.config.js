var path = require('path');
var webpack = require('webpack');
var postcss = require('./postcss.config.js');

var config = {
  devtool: 'eval-source-map',
  entry: [
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'node_modules/react-select'),
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: "style-loader!css-loader!postcss-loader!sass-loader"
      }
    ]
  }
};
module.exports = config;
