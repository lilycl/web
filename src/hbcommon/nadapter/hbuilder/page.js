
import utils from '../utils';
/**
 * webview配置项
 */
const _opt = {
    // 是否显示滚动条
    scrollIndicator: 'none',

    // 是否可缩放
    scalable: false,

    // 动画类型
    animate: 'slide-in-right',

    // 加载完成后才打开webview
    openWhenLoaded: true,

    // 页面关闭时可再次打开
    closeReopen: true,
    
    // 加载页面时是否显示loading
    showWaiting: false
}

// 客户端网页调试url
const DEBUG_URL = 'http://' + location.host + '/'

export default {

    /**
     * 隐藏当前webview
     * @param hide [boolean] 是否只关闭不销毁webview
     */
    back(hide) {
        let ws = window.plus.webview.currentWebview();

        if (hide) {
            ws.hide('auto');
        } else {
            ws.close('auto');
        }
    },

    /**
     * 关闭指定id的webview
     * @param id webview id
     * @param hide 是否隐藏不销毁
     */
    close(id, hide) {
        let openw = plus.webview.getWebviewById(id)

        if (openw) {
            if (hide) {
                openw.hide()
            } else {
                openw.close()
                openw = null 
            }
        }
    },

    /**
     * 退出应用
     */
    quit() {
        window.plus.runtime.quit();
    },

    /**
     * 得到所有webview
     * @return Array[WebviewObject] 
     */
    getAll() {
        return window.plus.webview.all()
    },

    /**
     * 关闭所有webview窗口
     */
    closeAll () {
        this.getAll().forEach(webviewObject => {
            this.close(webviewObject.id);
        });
    },

    /**
     * 得到最父级webview
     */
    getTop() {
        return window.plus.webview.getTopWebview()
    },

    /**
     * 得到入口webview
     */
    getLaunch() {
        return window.plus.webview.getLaunchWebview() || plus.webview.getWebviewById('index')
    },

    /**
     * 得到当前webview
     */
    getCurrent() {
        return window.plus.webview.currentWebview()
    },

    /**
     * 为某个页面执行Vue方法
     * @param id 页面id必须为未关闭页面
     * @param method vue方法该方法必须是父级组件中的方法
     */
    exec(id, method, params) {
        let _webview = null
        
        if (typeof id === 'string') {
            _webview = plus.webview.getWebviewById(id)
        } else {
            _webview = id
        }

        if (_webview) {
            _webview.evalJS('setTimeout(function(){window.__vm__.$children[0].'+method+'()}, 0)')
        }
    },

    /**
     * 关闭当前webview
     */
    closeCurrent() {
        window.plus.webview.currentWebview().close()
    },

    /**
     * 预加载页面
     * @param {URIString} id : 页面url
     * @param {object} opt   : webview配置
     */
    prepare(id, opt) {
        let openw = plus.webview.getWebviewById(id)

        if (!openw) {
            let filename = './' + id + '.html';
            
            opt = Object.assign(_opt, opt)

            // 如果是在开发环境下，跳转url地址
            if (window.__env__ === 'development') {
                filename = DEBUG_URL + id + '.html';
            }

            openw = window.plus.webview.create(filename, id, {
                scrollIndicator: opt.scrollIndicator,
                scalable: opt.scalable
            })

            // 页面关闭后不可再次打开
            if (opt.closeReopen) {
                openw.addEventListener('close',function(){
                    openw = null;
                },false);
            }

            return openw
        }  
        
        return openw
    },
    
    /**
     * 打开新窗口
     * @param {URIString} id : 要打开页面url
     * @param {object} params : 需要传递的页面参数
     * @param {object} opt   : webview配置
     */
    open(id, params, opt) {
        let openw;
        if (typeof id === 'object') {
            openw = id
        } else {
            openw = plus.webview.getWebviewById(id)
        }

        let filename = './' + id + '.html';
        let evalJS = 'window.__initData__ = ' + JSON.stringify(params)

        opt = Object.assign(_opt, opt)

        // 如果是在开发环境下，跳转url地址
        if (window.__env__ === 'development') {
            filename = DEBUG_URL + id + '.html';
        }

        // 缓存栈中有时直接打开
        if (openw) {
            if (params) {
                openw.evalJS(evalJS)
            }
            openw.evalJS('setTimeout(function(){try{window.__vm__.$children[0]._callHook("ready");window.scrollTo(0,0);}catch(e){}}, 0)')

            // 执行vue初始化方法 
            openw.show(opt.animate)
            return openw;
        }

        // 是否显示等待框
        if (opt.showWaiting) {
            window.plus.nativeUI.showWaiting()
        }

        openw = window.plus.webview.open(filename, id, {
            scrollIndicator: opt.scrollIndicator,
            scalable: opt.scalable,
            scrollsToTop: true
        }, opt.animate)

        // 页面加载完成后才显示
        if (opt.openWhenLoaded) {
            openw.addEventListener('loaded',() => {
                if (params) {
                    openw.evalJS(evalJS)
                }
                openw.show(opt.animate);
            },false);
        }

        // 页面关闭后不可再次打开
        if (opt.closeReopen) {
            openw.addEventListener('close',function(){
                openw = null;
            },false);
        }

        return openw;
    },
    
    /**
     * 判断是否支持沉浸式，如果支持返回 状态栏高度，否则返回 0
     * @return {[type]} [description]
     */
    immersed() {
        const isAndroid = utils.isAndroid;
        
        if(isAndroid){
            return 0;
        }else{
            //判断当前环境是否支持沉浸式状态栏
            if(plus.navigator.isImmersedStatusbar()){
                // 获取当前系统状态栏高度
                return plus.navigator.getStatusbarHeight();
            }else{
                return 0;
            }
        }
    },

    /**
     * 监听页面滚到底部时间
     */
    scrollToBottom(done, capture) {
        document.addEventListener("plusscrollbottom", done, !!capture )
    }
}