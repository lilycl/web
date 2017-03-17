/**
 * webpack微信端配置
 */
var webpack = require('webpack')
var path = require('path')
var config = require('../config')
var utils = require('./utils')
var HtmlWebpackPlugin = require('html-webpack-plugin');

config.alias.entry = path.resolve(config.devpath, 'hbcommon/wx/entry')

module.exports = {
  entry: ['./hbbuild/dev-client', path.resolve(config.devpath, 'hbcommon/wx/app.js')],
  output: {
    path: config.dev.assetsRoot,
    publicPath: '/',
    filename: '[name].js?v=[hash]'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: config.alias
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  module: {
    preLoaders: [
      // {
      //   test: /\.vue$/,
      //   loader: 'eslint',
      //   include: config.devpath,
      //   exclude: /node_modules/
      // },
      // {
      //   test: /\.js$/,
      //   loader: 'eslint',
      //   include: config.devpath,
      //   exclude: /node_modules/
      // }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        include: config.devpath,
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: config.devpath,
        exclude: /node_modules/
      },
      {
        test: /\.tpl$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[ext]')
        }
      }
    ].concat(utils.styleLoaders({ sourceMap: config.dev.cssSourceMap }))
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  vue: {
    loaders: utils.cssLoaders(),
    postcss:[require('postcss-salad')],
    autoprefixer: false
  },
  postcss: function () {
      return [require('postcss-salad')];
  },
  devtool: '#source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(config.devpath, 'hbcommon/wx/index.html'),
      inject: 'body',
      minify: { removeAttributeQuotes: true, minifyJS: true, minifyCSS: true, removeComments: true }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
