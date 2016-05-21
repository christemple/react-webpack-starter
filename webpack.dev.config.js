var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config');

baseWebpackConfig.entry.push('webpack/hot/dev-server');
baseWebpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin());

module.exports = baseWebpackConfig;
