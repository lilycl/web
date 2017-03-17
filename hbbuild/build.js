/**
 * 发布生产产品打包 生成生产环境代码 
 * 执行后会生成一个wgt包到update-server/packages目录下
 */

require('shelljs/global')

var config = require('./config')
process.env.NODE_ENV = config.build.env

var os = require("os")
var fs = require("fs")
var path = require('path')
var ora = require('ora')
var zipFolder = require('zip-folder')
var jsonfile = require('jsonfile')

var webpack = require('webpack')
var webpackConfig = require('./webpack/webpack.prod.conf')
var ProgressPlugin = require('webpack/lib/ProgressPlugin')
var htmlGenerator = require('./webpack/htmlGenerator')

var datapath = path.join(__dirname, '../manifest.json')
var manifest = jsonfile.readFileSync(datapath)

manifest.version.name = manifest.version.name.split('.').map(function(item, index){
  return (index === 2) ? (item/1 + 1) : item 
}).join('.')

jsonfile.writeFileSync(datapath, manifest, {spaces: 2})

var zipFileName   = manifest.version.name + '.wgt'

console.log('修改manifest.json中的版本号为：' + manifest.version.name)

webpackCompile()

// webpack编译
function webpackCompile() {

  // 添加压缩代码插件
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    })
  )

  webpackConfig.plugins = webpackConfig.plugins.concat(htmlGenerator(true))

  // 重新设置输出缓存路径
  webpackConfig.output.path = config.build.prodRoot

  var
  spinner = ora('building for production...')
  spinner.start()

  mkdir('-p', config.build.prodRoot)
  mkdir('-p', config.build.prodRoot + '/static/lib/')

  /**
   * 生产环境, 复制静态文件到指定文件夹
   */
  cp('-R', path.join(__dirname, '../src/assets/lib/'), 
         config.build.prodRoot + (os.platform() === 'darwin' ? '/static/lib/' : '/static/')
  )
  cp('-R', 'manifest.json', config.build.prodRoot)

  webpackConfig.watch = true
  webpackConfig.progress = true

  var compiler = webpack(webpackConfig)

  compiler.apply(
    new ProgressPlugin(function(percentage, msg) {
      spinner.text = 'building for production... ' + (percentage * 100).toFixed(0) + '% ' + msg;
    })
  );

  compiler.run(function (err, stats) {
    console.log('webpack打包完成')
    spinner.stop()
    if (err) throw err
    genZip()
  })
}

// 生成打包文件
function genZip() {
  var _genPath = path.join(__dirname, '/update-server/packages/')

  if (!fs.existsSync(_genPath)) {
    fs.mkdirSync(_genPath)
  }
  
  console.log('正在生成压缩文件..')

  zipFolder(
    config.build.prodRoot, 
    _genPath + zipFileName, 
    function(err) {
      if (err) throw err
      console.log('文件压缩成功')
      rm('-rf', config.build.prodRoot)

      // genVersion()
    }
  )
}

// 写入version文件
function genVersion() {
  console.log('写入version文件')

  var versionpath = path.join(__dirname, './update-server/version.json')
  var versionConfig = jsonfile.readFileSync(versionpath).map(function(item){
      item.isonline = false
      return item
  })

  versionConfig.unshift({
    "version": manifest.version.name,
    "url": manifest.version.name + ".wgt",
    "isonline": true
  })

  jsonfile.writeFileSync(
    versionpath, 
    versionConfig, 
    {spaces: 2}
  )

  console.log('打包完成')
}

