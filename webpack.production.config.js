var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config');

baseWebpackConfig.devtool = 'cheap-module-source-map';
baseWebpackConfig.debug = false;
baseWebpackConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      sequences: true,
      dead_code: true,
      conditionals: true,
      booleans: true,
      unused: true,
      if_return: true,
      join_vars: true,
      drop_console: true,
      warnings: false
    },
    mangle: { except: ['$super', '$', 'exports', 'require'] },
    output: { comments: false }
  })
);

module.exports = baseWebpackConfig;
