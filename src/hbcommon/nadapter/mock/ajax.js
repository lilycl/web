/**
 * Created by zyh on 16/4/10.
 */
'use strict';
import utils from '../utils';
import user from '../hbuilder/user';

const CNT_TYPE = {
  JSON: 'application/json'
}

/**
 * Mock 提供的http请求，
 * @param opt
 */
export default (opt) => {

  opt = Object.assign({
    url: '',
    type: 'GET',
    cache: false,
    dataType: 'JSON',
    data: {},
    success() { },
    error() { },
    headers: {}
  }, opt);

  let obj = {
    appid: '3.8.9',
    token: '5184BDD1-E296-474A-9693-5D0FE6A53193'
  }

  let extra = utils.obj2Hash(obj);

  if (opt.url.indexOf('?') > -1) { // 存在问号
    opt.url += ('&' + extra);
  } else {
    opt.url += ('?' + extra);
  }

  ajax(opt);
}

/**
 * ajax请求函数
 * */
function ajax(options) {
  options = options || {};
  options.type = (options.type || 'GET').toUpperCase();
  options.dataType = options.dataType || 'json';
  var params;
  if (CNT_TYPE.JSON === options.contentType) {
    params = options.data;
  } else {
    params = utils.obj2Hash(options.data);
  }
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      var status = xhr.status;
      if (status >= 200 && status < 300) {
        try {
          options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML);

          if (xhr.getResponseHeader('token')) {
            user.setToken(xhr.getResponseHeader('token'))
          }
        } catch (e) {
          options.fail && options.fail(status);
        }
      } else {
        options.fail && options.fail(status);
      }
    }
  }

  if (options.type == 'GET') {

    if (options.url.indexOf('?') > -1) { // 存在问号
      options.url += ('&' + params);
    } else {
      options.url += ('?' + params);
    }

    xhr.open('GET', options.url, true);
    xhr.setRequestHeader('token', user.getToken());
    xhr.send(null);
  } else if (options.type == 'POST') {
    xhr.open('POST', options.url, true);
    //设置表单提交时的内容类型
    xhr.setRequestHeader('Content-Type', options.contentType ? options.contentType : 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('token', user.getToken());
    xhr.send(params);
  }
}