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
        loader: ExtractTextPlugin.extract('style', 'css!autoprefixer?browsers=last 2 version!less', {publicPath: '../'}),
        include: __dirname + '/src/less',
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&name=./assets/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&name=./assets/fonts/[name].[ext]'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file?name=./assets/fonts/[name].[ext]'
      },
      {
        test: /\.otf?$/,
        loader: 'file?name=./assets/fonts/[name].[ext]'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=./assets/img/[name].[ext]'
      },
      {
        test: /\.(png|jpg|jpeg)?$/,
        loader: 'url?limit=10000&name=./assets/img/[name].[ext]',
      },

    ]
  },
  output: {
    filename: 'js/index_bundle.js',
    path: __dirname + '/jolilj.github.io'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    HTMLWebpackPluginConfig,
    new ExtractTextPlugin('styles/main.css')
  ],
};
