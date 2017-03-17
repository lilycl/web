/**
 * 发布本机源码测试打包 生成测试环境代码 
 * 执行后会 生成带map source的源代码到config/prod.js的assetsRoot目录下
 */

// https://github.com/shelljs/shelljs
require('shelljs/global')
var config = require('./config')
process.env.NODE_ENV = config.build.env

var os = require("os")
var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var ProgressPlugin = require('webpack/lib/ProgressPlugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpackConfig = require('./webpack/webpack.wx.conf')

var outpath = path.join(__dirname, '../dist')

webpackConfig.entry.shift()
webpackConfig.output.path = outpath
webpackConfig.plugins.pop()
webpackConfig.plugins.push(
  new ExtractTextPlugin('static/css/[name].css')
)
webpackConfig.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false}
  })
)

var
spinner = ora('building for development...')
spinner.start()

mkdir('-p', outpath)
mkdir('-p', outpath + '/static/lib/')
cp('-R', path.join(__dirname, '../src/assets/lib/'), 
         outpath + (os.platform() === 'darwin' ? '/static/lib/' : '/static/')
  )

var compiler = webpack(webpackConfig)

compiler.apply(
  new ProgressPlugin(function(percentage, msg) {
    spinner.text = 'building for development... ' + (percentage * 100).toFixed(0) + '% ' + msg
  })
)

compiler.run(function (err, stats) {
  spinner.stop()

  if (err) throw err

  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    timings: true,
  }) + '\n')
})