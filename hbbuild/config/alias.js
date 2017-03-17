var path = require('path')

/**
 * 尽量不用 ../../这种相对路径, 使用别名, 方便使用、维护和移植
 * @example 
 * good:  
 *  import srcConfig from 'src/config' 
 *  import NAPIConfig from 'nadapter/config' 
 * 
 * bad: 
 *  import srcConfig from '../../config' 
 *  import NAPIConfig from '../config' 
 * 
 * modify by libaoxu@gaosiedu.com 2016-12-07
 */
module.exports = function (devpath) {
  return {
    'src': path.resolve(devpath, ''),
    'assets': path.resolve(devpath, 'assets'),
    'modules': path.resolve(devpath, 'modules'),
    'scss': path.resolve(devpath, 'scss'),
    'pages': path.resolve(devpath, 'pages'),
    
    'common': path.resolve(devpath, 'hbcommon'),
    'entry': path.resolve(devpath, 'hbcommon/entry'),
    'components': path.resolve(devpath, 'hbcommon/components'),
    'directive': path.resolve(devpath, 'hbcommon/directive'),
    'filters': path.resolve(devpath, 'hbcommon/filters'),
    'mint-ui': path.resolve(devpath, 'hbcommon/mint-ui'),
    'mixins': path.resolve(devpath, 'hbcommon/mixins'),
    'nadapter': path.resolve(devpath, 'hbcommon/nadapter'),
    'service': path.resolve(devpath, 'hbcommon/service'),
    'utils': path.resolve(devpath, 'hbcommon/utils'),
    'wx': path.resolve(devpath, 'hbcommon/wx')
  }
}