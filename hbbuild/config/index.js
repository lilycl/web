/**
 * 项目build配置文件
 */
var path = require('path')
var sourcepath = path.resolve(__dirname, '../../src/')
// var buildpath = path.join(__dirname, '../../../gaosi/c-client/www')
var buildpath = path.join(__dirname, '../../hbuilder')
var customConfig = require('../../src/config')

module.exports = {

  // 项目源码路径
  devpath: sourcepath,

  // 生产环境配置
  build: require('./build')(sourcepath, buildpath),

  // 开发环境配置
  dev: require('./dev')(sourcepath),

  // 是否mock api
  mock: customConfig.MOCK,

  // 项目全局别名
  alias: require('./alias')(sourcepath),

  // 入口html地址
  views: require('../../src/pages/views')
}
