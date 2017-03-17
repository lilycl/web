var path = require('path')

module.exports = function (sourcepath, buildpath) {
  return {
    env: 'production',

    // 离线测试时输出路径配置
    assetsRoot: buildpath,

    // 资源文件访问路径
    assetsSubDirectory: 'static',

    // 生产时输出路径配置
    prodRoot: path.join(__dirname, '../../prod'),

    // 是否有source map
    productionSourceMap: true
  }
}