var path = require('path');
var webpack = require('webpack');

var config = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/main.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = config;
