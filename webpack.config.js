const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV,
  devtool:isProd  ? 'cheap-source-map' : 'source-map',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{test: /\.txt$/, use: 'raw-loader'}],
  },
  plugins: [new HtmlWebpackPlugin({template: './src/index.html'})],
};
