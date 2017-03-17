import utils from './utils';

import config from './config';

let apis = config.mock

if (utils.isHB()) {
  apis = config.hbuilder
}

// 现阶段强制微信配置
// if (utils.isWx || !utils.isWx ) {
//   apis = config.wx
// }

// if (utils.isWx) {
  apis = config.wx
// }


export default apis;
