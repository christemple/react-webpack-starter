var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname,'app'),
  entry: ['./app.js'],
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'app.js',
    hash: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') },
      { test: /\.(svg|png)$/, loader: 'url-loader' },
      { test: /\.json$/, loader: 'json' }
    ],
    noParse: /node_modules\/json-schema\/lib\/validate\.js/
  },
  plugins: [
    new HTMLWebpackPlugin({
      hash: true,
      template: path.join(__dirname,'app','index.html'),
      inject: 'body'
    }),
    new ExtractTextPlugin('app.css')
  ]
};
