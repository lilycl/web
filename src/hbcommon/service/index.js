/**
 * Created by zyh on 16/6/13.
 * 后端交互层，导出所有后端交互的接口
 */

import NAPI from '../nadapter'
import nutils from '../nadapter/utils'

import Service from './service'
import apiConfig from '../../apis'
import config from '../../config'

const REQ_TYPE = {
    POST: 'post',
    GET: 'get'
}

/**
 * 返回api集合
 * import S from 'service';
 * S.login({password:'xxx', username:'damon'})
 *  .then(ret => {console.log(ret)})
 *  .catch(err => {console.log(err)});
 * 
 * 增加命名空间支持
 * 例如：S.namespace.getUser()
 *       .then(ret => {console.log(ret)})
 *       .catch(err => {console.log(err)})
 * */
const apiCollection = {};

Service.setReqInstance(NAPI.ajax);

for (let key in apiConfig) {
    if (!apiConfig[key].url) {
        apiCollection[key] = {}
        for (let childKey in apiConfig[key]) {
            apiCollection[key][childKey] = getApiInstance(apiConfig[key][childKey])
        }
    } else {
        apiCollection[key] = getApiInstance(apiConfig[key])
    }
}

function getApiInstance(_api) {
    return function (data) {
        let _loading =  _api.loading;

        let params = {
            url: _api.url,
            type: _api.type,
            contentType: _api.contentType,
            data: typeof data !== 'object' ? data : Object.assign(_api.defaultData || {},  data || {}),
            appId: config.APP_ID
        };
        
        return new Promise((res, rej) => {
            Service.request( params,  (ret) => {
                if (!ret.status) {
                    return rej(ret);
                }
                res(ret);

                if (_api.callback && typeof _api.callback === 'function') {
                    _api.callback(ret);
                }
            }, err => {
                rej(err);
                NAPI.ui.toast('请求失败，请重试');
                NAPI.loading.hideAll();

                if (_api.callback && typeof _api.callback === 'function') {
                    _api.callback(err);
                }
            }, _loading);
        });

    }
}

export default apiCollection