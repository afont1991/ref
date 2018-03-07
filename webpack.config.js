const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  devtool: 'inline-source-map',
  devServer: { contentBase: './build', port: 9000 },
  plugins: [
    new CleanWebpackPlugin([ 'build' ]),
    new HtmlWebpackPlugin({ template: 'index.html' })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
      { test: /\.(csv|tsv)$/, use: ['csv-loader']},
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  }
};
