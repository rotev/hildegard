const path = require('path');
const webpack = require('webpack');

const publicPath = '/dist/build/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    // root: path.join(__dirname, 'src'),
    alias: {
      domains: path.resolve(__dirname, 'src/domains'),
      components: path.resolve(__dirname, 'src/components'),
    },
  },
  // Content
  entry: './src/index.js',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // simplifies creation of HTML files to serve your webpack bundles.
    // This is especially useful for webpack bundles that include a hash in the filename
    // which changes every compilation. You can either let the plugin generate an HTML
    // file for you, supply your own template using lodash templates or use your own loader.
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement',
      template: 'index.html',
    }),
    // Auto replacement of page when i save some file, even css
    new webpack.HotModuleReplacementPlugin(),
  ],

  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].bundle.js',
    publicPath,
    sourceMapFilename: '[name].map',
  },

  devServer: {
    port: 3000,
    host: 'localhost',
    // Be possible go back pressing the "back" button at chrome
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath,
    contentBase: path.join(__dirname, publicPath),
    // hotmodulereplacementeplugin
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.styl$/, use: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.css$/, use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel-loader'],
      }],
  },
};
