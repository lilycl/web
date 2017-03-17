import decorator from './decorator'

//生成Service单例
let __instance__ = (function () {
    let instance;

    return (newInstance) => {
        if (newInstance) instance = newInstance;
        return instance;
    }
}())

/**
 * Service 类
 * 提供和后端交互
 * @param reqInstance 传入执行请求的实体对象
 * @return 经过装饰器后的Service对象
 * */
class Service {

    constructor (reqInstance) {
        if (__instance__(null)) {
          return __instance__(null);
        }
        __instance__(this);
    }

    setReqInstance (reqInstance) {
        this.ajax = reqInstance;
    }

    setLogInstance (logInstance) {
        this.log = logInstance;
    }

    request (params, done, err, appId) {
        this.ajax({
            url: params.url,
            type: params.type,
            dataType: 'json',
            contentType: params.contentType,
            data: params.data,
            success: done,
            error: err
        }, appId)
    }
}

export default decorator(new Service());