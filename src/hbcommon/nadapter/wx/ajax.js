/**
 * 
 */
import utils from '../utils';
import ui from './ui';
import user from './user';

// 请求超时时间
const TIMEOUT = 20000;
const CNT_TYPE = {
  JSON: 'application/json'
};

export default (opt, appId) => {
  let extra = utils.obj2Hash({
    // devicemodel: window.plus.device.model, // 设备的型号
    // devicevendor: window.plus.device.vendor, // 生成设备厂商
    // appid: '3.8.9',
    // token: '5184BDD1-E296-474A-9693-5D0FE6A53193'
  });

  opt = Object.assign({
    url: '',
    type: 'GET',
    cache: false,
    dataType: 'JSON',
    // contentType: '', // 设置表单提交时的内容类型
    data: {},
    success: function () { },
    error: function () { },
    headers: {}
  }, opt);

  ajax(opt, appId);
}

/**
 * ajax请求函数
 * */
function ajax(options, appId) {
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = options.dataType || 'json';

  let xhr;

  let params = utils.obj2Hash(options.data);
  if (CNT_TYPE.JSON === options.contentType) {
    params = options.data;
  }

  if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest();
  }
  // debugger
  // 设置请求超时时间
  xhr.timeout = TIMEOUT;

  xhr.onreadystatechange = function () {
    // 请求成功
    if (xhr.readyState === 4) {
      var status = xhr.status;

      if (status >= 200 && status < 300) {
        try {
          options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML);
        } catch (e) {
          options.error && options.error(status);
        }

        let _token = xhr.getResponseHeader('token');

        // 默认设置用户token
        if (_token) {
          user.setToken(_token);
        }
      } else {
        options.error && options.error(status);
      }
    }
  };

  // 超时处理
  xhr.ontimeout = function () {
    options.error && options.error(-1);
  };


  if (options.type == 'GET') {
    if (params) {
      if (options.url.indexOf('?') > -1) { // 存在问号
        options.url += ('&' + params);
      } else {
        options.url += ('?' + params);
      }
    }
    xhr.open(options.type, options.url, true);
    xhr.setRequestHeader('token', user.getToken());
    xhr.setRequestHeader('appId', appId || '2');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(null);
  } else {
    xhr.open(options.type, options.url, true);
    // 设置表单提交时的内容类型
    xhr.setRequestHeader('token', user.getToken());
    xhr.setRequestHeader('appId', appId || '2');
    xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send(JSON.stringify(options.data));
  }
  
}