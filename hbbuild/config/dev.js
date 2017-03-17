var path = require('path')
var customConfig = require('../../src/config')

module.exports = function (sourcepath) {
  return {
    env: 'development',

    // 开发服务器监听的端口
    port: customConfig.PORT || '8080',

    // 资源文件根路径
    assetsRoot: path.join(sourcepath, 'assets'),

    // 静态资源文件打包路径
    staticPath: path.join(sourcepath, 'static'),

    // 静态资源文件访问根路径
    staticRootPath: 'static',
    
    // 浏览器访问时的代理配置
    proxyTable: customConfig.PROXY_TABLE,

    // 是否开启css map
    cssSourceMap: true
  }
}

