
/**
 * 请求装饰器
 * 处理所有 get post 请求的前后
 * 如 loading 动画等
 * */
// import AutoLoading from './autoloading'
import NAPI from '../nadapter'
import Config from '../../config'
import Autoloading from './autoloading'

const AL = new Autoloading()

const AL_KEY = '__autoloading'

export default function decorator (target) {
    const _request = target.request.bind(target)
    //请求装饰
    target.request = function (params, done, error, loading, autoError) {
        if (loading) {
            AL.show(AL_KEY)
        }
        
        _request(
            // 请求参数
            params, 
            // 请求成功回调
            (ret) => {
                done(ret)
                AL.hide(AL_KEY)
                errorQuestLog(params, ret)
            }, 
            // 请求失败回调
            (err) => {
                AL.hide(AL_KEY)
                error && error(err)
                errorLog(params, err)
            }, 
            // 应用appId
            Config.APP_ID
        )

        return this
    }
    return target
}

/**
 * 发送异常接口错误日志
 * */
function errorQuestLog (params, ret) {
    NAPI.stat.send('API_ERROR', {errmsg: Object.assign(params,  ret, {date: new Date()}) })
}

/**
 * 发送错误日志
 * */
function errorLog (params, err) {
    NAPI.stat.send('NET_ERROR', {errmsg: Object.assign(params,  {err: err},  {date: new Date()} )})
}