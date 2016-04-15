var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var merge = require('webpack-merge')

var TARGET = process.env.npm_lifecycle_event
var ROOT_PATH = path.join(__dirname)
var APP_PATH = path.join(ROOT_PATH, 'app')

process.env.BABEL_ENV = TARGET

var common = {
  entry: APP_PATH,
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: path.join(ROOT_PATH, 'build')
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: [ APP_PATH, path.join(ROOT_PATH, 'node_modules/react-widgets/dist/css') ]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [ APP_PATH ]
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      { test: /\.gif$/, loader: 'url-loader?mimetype=image/png' },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: 'file-loader?name=[name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Bdgt',
      template: 'app/index.html',
      inject: 'body'
    })
  ]
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}
