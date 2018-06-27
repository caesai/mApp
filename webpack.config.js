const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const resolvePath = relativePath => path.resolve(__dirname, relativePath);
const htmlIndexPath = resolvePath('public/index.html');

module.exports = {
  name: 'client',
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/index.jsx'],
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
  },
  node: {
    fs: 'empty',
    module: 'empty',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

  optimization: {
    minimize: false,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],

  devServer: {
    contentBase: 'dist',
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
