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
var ProgressPlugin = require('webpack/lib/ProgressPlugin');

var webpackConfig = require('./webpack/webpack.prod.conf')
var htmlGenerator = require('./webpack/htmlGenerator')

console.log(
  '  Tip:\n' +
  '  Built files are meant to be served over an HTTP server.\n' +
  '  Opening index.html over file:// won\'t work.\n' +
  '  You can set up the nginx for a proxy \n'
)

var
spinner = ora('building for development...')
spinner.start()

mkdir('-p', config.build.assetsRoot)
mkdir('-p', config.build.assetsRoot + '/static/lib/')

/**
 * 生产环境, 复制静态文件到指定文件夹
 */
cp('-R', path.join(__dirname, '../src/assets/lib/'), 
         config.build.assetsRoot + (os.platform() === 'darwin' ? '/static/lib/' : '/static/')
  )
cp('-R', 'manifest.json', config.build.assetsRoot)

webpackConfig.watch = true
webpackConfig.progress = true
webpackConfig.devtool = '#source-map'

webpackConfig.plugins = webpackConfig.plugins.concat(htmlGenerator(false))

var compiler = webpack(webpackConfig)

compiler.watch({
    aggregateTimeout: 300, // wait so long for more changes
    poll: true // use polling instead of native watchers
}, function(err, stats) {
});

compiler.apply(
  new ProgressPlugin(function(percentage, msg) {
    spinner.text = 'building for development... ' + (percentage * 100).toFixed(0) + '% ' + msg;
  })
);

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