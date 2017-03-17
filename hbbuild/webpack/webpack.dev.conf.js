var webpack = require('webpack')
var merge = require('webpack-merge')
var config = require('../config')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var htmlGenerator = require('./htmlGenerator')

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./hbbuild/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  output: {
    path: config.dev.assetsRoot,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },

  /**
   * '#eval-source-map': 效率更高
   * '#source-map': 更方便调试
   */ 
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        /**
         * webpack.DefinePlugin插件内部会有一个字符串解析, 这里需要变为: '"production"' 
         * add by libaoxu@gaosiedu.com 2016-12-05
         */
        'NODE_ENV': JSON.stringify(config.dev.env)
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ].concat(htmlGenerator(false))
})
