const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  //watch: true,
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    hot: true,
    port: 8080,
  }
});