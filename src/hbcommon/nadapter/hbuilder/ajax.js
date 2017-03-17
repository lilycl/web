/**
 * Created by liaobin on 16/4/10.
 */
import utils from '../utils';
import ui from './ui';
import user from './user';

// 请求超时时间
const TIMEOUT = 20000
const CNT_TYPE = {
    JSON: 'application/json'
}
export default (opt, appId) => {
    let extra = utils.obj2Hash({
        devicemodel: window.plus.device.model, // 设备的型号
        devicevendor: window.plus.device.vendor, // 生成设备厂商
    })
  
    opt = Object.assign({
        url: '',
        type: 'GET',
        cache: false,
        dataType: 'JSON',
        // contentType: '', // 设置表单提交时的内容类型
        data: {},
        success: function () {},
        error: function () {},
        headers: {}
    }, opt)

    if (opt.url.indexOf('?') > -1) { // 存在问号
        opt.url += ('&' + extra);
    }else{
        opt.url += ('?' + extra);
    }

    ajax(opt, appId);
}

/**
 * ajax请求函数
 * */
function ajax(options, appId) {
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    
    var params = utils.obj2Hash(options.data);
    //判断options.contentType 是否为'application/json'
    if (CNT_TYPE.JSON === options.contentType) {
        params = options.data;
    }
    var xhr = new window.plus.net.XMLHttpRequest();

    // 设置请求超时时间
    xhr.timeout = TIMEOUT

    xhr.onreadystatechange = function() {
        // 请求成功
        if (xhr.readyState === 4) {
            var status = xhr.status;
            
            if (status >= 200 && status < 300) {
                try{
                    options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML);
                }catch (e){
                    options.error && options.error(status);
                }

                let _token = xhr.getResponseHeader('token')

                // 默认设置用户token
                if ( _token ) {
                    user.setToken(_token)
                }
            } else {
                options.error && options.error(status);
            }
        }
    }

    // 超时处理
    xhr.ontimeout = function() {
        options.error && options.error(-1);
    }

    if (options.type == 'GET') {
        if(options.url.indexOf('?') > -1) { // 存在问号
            options.url += ('&' + params);
        }else{
            options.url += ('?' + params);
        }
        xhr.open('GET', options.url);
        xhr.setRequestHeader('token', user.getToken())
        xhr.setRequestHeader('appId', appId || '2')
        xhr.send(null);
    } else if (options.type == 'POST') {
        xhr.open('POST', options.url);
        
        xhr.setRequestHeader('Content-Type', options.contentType ? options.contentType : 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('token', user.getToken());
        xhr.setRequestHeader('appId', appId || '2');
        xhr.send( params);
    }
}