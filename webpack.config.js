const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'client',
  devtool: 'source-map',
  entry: './index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].js'
  },
  node: {
    fs: 'empty',
    module: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  }
};
