import Vue from 'vue'
import NAPI from 'nadapter'
import Filters from './filters'
import VueTap from 'utils/v-tap'
import Directive from './directive'
import utils from './utils'

import Config from '../config'

import '../pages/base.postcss'

// 开启chrome vue 调试工具
Vue.config.devtools = true

// 初始化vue filter
Filters(Vue)
// 初始化vue directive
Directive(Vue)

// 增加tap指令
Vue.use(VueTap)

/**
 * vue应用入口页
 * 所有页面都先经过这里
 * @methods __getPageData 为应用默认赋予获取参数方法
 * @methods __gotoPage  跳转到某页方法
 */

let initData = {}

// 得到初始化参数
Vue.prototype.__getPageData = () => {
  return window.__initData__ || initData
}

/**
 * 为Vue实例注册全局方法 跳转到页面
 * @param id 页面名字
 * @param params 页面参数
 * @param option 打开webview选项
 */
Vue.prototype.__gotoPage = (id, params, option) => {
  NAPI.page.open(id, params, option || {})
}

/**
 * 角色对象挂在到Vue.prototype上, 
 * 注意: 目前只有教师端需要挂载这个变量, 只教师端才require
 */
let roleInfo = {};
if (Config.APP_SCHEME === 'teacher') {
  Vue.prototype.__roleInfo = roleInfo;
}

/**
 * @param App [object] vue组件对象
 * @param Prepares [array] 预加载页面列表
 * @param Opts [object] 入口页配置
 */
export default (App, Prepares, Opts) => {
  Opts = Opts || {}

  try {
    NAPI.ready((data) => {

      initData = data

      // 教师端每次进入应用都注入登录信息
      if (Config.APP_SCHEME === 'teacher') {
        NAPI.user.save(NAPI.user.getLoginInfo());

        // 地址引用赋值
        Object.assign(roleInfo, NAPI.user.getRoleInfo());
      }

      __AutoLoading__.hide()

      // 监听网络变化
      if (Config.CHECK_NETWORK) {
        NAPI.event.netchange(network => {
          if (network === 0 || network === 1) {
            NAPI.ui.toast('网络连接已断开，请检查你的网络')
          }
        });
      }

      // 未登录时直接跳转到登录页
      // 判断依据 views中配置了__notchecklogin__（当前页面不检查登录）
      // 且__env__不在开发环境
      if (
        __notchecklogin__ === ''
        && Config.AUTO_TO_LOGIN
        && (
          !NAPI.user.get()
          || NAPI.user.getToken() === ''
        )
      ) {
        let _webview = NAPI.page.getCurrent()

        NAPI.page.open('login')

        return setTimeout(() => {
            _webview.hide(true)
        }, 1000)
      }

      // 控制返回按钮
      // __nobackevent__（不监听返回事件）
      if (__nobackevent__ === '' && utils.isAndroid) {
        // __preventexit__（当前页面返回会退出时做此操作）
        if (__preventexit__ !== '') {
          NAPI.event.listenBack(() => {
            NAPI.ui.confirm('确认应用退出？', e => {
              if (e.index === 0) {
                window.plus.runtime.quit()
              }
            }, '高思教育')
          })
        } else {
          NAPI.event.listenBack(() => {
            NAPI.page.back(false)
          })
        }
      }

      // 强制关闭所有loading
      NAPI.event.listenBack(() => {
        NAPI.loading.hideAll()
      })

      window.__vm__ = new Vue({
        el: 'body',
        components: { App }
      })

      // 页面预加载
      if (Prepares) {
        Prepares.forEach(prepare => {
          NAPI.page.prepare(prepare)
        })
      }

      // 上传错误统计
      window.onerror = (sMsg, sUrl, sLine) => {
        if (Config.APP_SCHEME !== 'teacher') {
          NAPI.stat.send('JS_ERROR', { errmsg: sMsg + sLine + sUrl })
        }
      }
    })
  } catch (e) {
  }

}
