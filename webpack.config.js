var webpack = require('webpack');
var path = require('path');

const DEBUG = process.env.NODE_ENV !== 'production';

module.exports = {
  context: path.join(__dirname, './example'),
  entry: {
    jsx: './index.js',
    html: './index.html'
  },
  output: {
    path: path.join(__dirname, './build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devServer: {
    stats: {
      chunks: false,
      contentBase: './example',
      colors: true,
      hash: false,
      hot: true,
      modules: false,
      timings: false,
      version: false
    }
  }
};
