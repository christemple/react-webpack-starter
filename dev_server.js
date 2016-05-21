var webpack = require('webpack');
var webpackConfig = require('./webpack.dev.config');
var WebpackDevServer = require('webpack-dev-server');

webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080', 'webpack/hot/dev-server');

var compiler = webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {hot: true});

server.listen(8080, 'localhost', function () {
  console.log('App listening @ localhost:8080');
});
