const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: './dist'
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']) },
      { test: /\.template\.html$/, loader: 'vue-template-loader' }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HTMLWebpackPlugin({ template: './template.html' }),
    new ExtractTextPlugin('styles.css')
  ]
}
