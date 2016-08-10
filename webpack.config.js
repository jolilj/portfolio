'use strict'

// Used for generating HTML file
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

// Used for generating css file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/js/index.jsx',
  ],
  devtool: 'source-map',
  module: {
    loaders: [

      {
        test: /\.js[x]?$/,
        include: __dirname + '/src',
        exclude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },

      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!less?sourceMap'),
        include: __dirname + '/src/less',
      },

      //bootstrap
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&name=/assets/fonts/[name].[ext]?[hash]'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&name=/assets/fonts/[name].[ext]?[hash]'},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?name=/assets/fonts/[name].[ext]?[hash]'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=./assets/img/[hash].[ext]'},

      //font-awesome
      //{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      //{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  output: {
    filename: 'js/index_bundle.js',
    path: __dirname + '/public'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('stylesheets/styles.css')
    ]
};
