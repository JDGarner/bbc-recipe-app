const express = require('express');
const app = express();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('./webpack.config.js');

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/dist'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  historyApiFallback: true
}));
app.use(webpackHotMiddleware(compiler));

const port = 3000;
app.listen(3000, function(error) {
  if (error) throw error;
  console.log('Server running on port ' + 3000);
});
