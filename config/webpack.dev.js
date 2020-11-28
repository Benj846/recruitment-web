const webpack = require('webpack');
const merge = require('webpack-merge');
const helpers = require('./helpers');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  
  devtool: 'eval-source-map',

  entry: {
    'app': [
      'webpack-hot-middleware/client?reload=true'
    ]
  },

  module: {
    rules: [
      // JS files
      {
        test: /\.jsx?$/,
        include: helpers.root('client'),
        loader: 'babel-loader'
      },

      // CSS files
      
      { test: /\.css$/, use: ['style-loader','css-loader' ]}
    ]
  },

  output: {
    filename: 'js/[name].js',
    //path: helpers.root('dist'),
    chunkFilename: '[id].chunk.js'
  },

  devServer: {
    contentBase: './client/public',
    historyApiFallback: true,
    stats: 'minimal' // none (or false), errors-only, minimal, normal (or true) and verbose
  }
});
