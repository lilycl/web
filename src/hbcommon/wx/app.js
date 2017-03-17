/**
 * 微信应用入口js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Directive from '../directive'
import Filters from '../filters'
import Router from './router'
import NAPI from 'nadapter'
import VueTap from 'utils/v-tap';
import wxConfig from './helpers/wxConfig.js';

import '../../pages/base.postcss'

let App = Vue.extend({template: '<div id="app"><router-view></router-view></div>'})

/**
 * 微信配置完成的Promise对象
 * @type {Promise}
 * @example wxConfigPromise.then(function someName () {})
 */
let wxConfigPromise = wxConfig.init();

Vue.config.silent = true

Vue.use(VueRouter)
Vue.use(VueTap)

// 注册指令和过滤器
Directive(Vue)
Filters(Vue)

// 得到初始化参数
Vue.prototype.__getPageData = function () {
  // 如果没有this, 则从__router__里面取值
  let router = this && this.$router || ___router__;
  let _params = router._currentRoute.query.params;
  return _params
    ? JSON.parse(decodeURIComponent(_params))
    : '';
}

/**
 * 为Vue实例注册全局方法 跳转到页面
 * @param id 页面名字
 * @param params 页面参数
 * @param option 打开webview选项
 */
Vue.prototype.__gotoPage = (id, params, option) => {
  NAPI
    .page
    .open(id, params, option || {})
}

/*
 * 创建父级Vue实例
 */
// window.__vm__ = new Vue({   el: 'body',   components: { App } })

/*
 * 创建路由实例
 */
let router = new VueRouter({linkActiveClass: 'active'})

window.__router__ = router;

/**
 * 微信配置完成通知
 */
// wxConfigPromise.then(() => {
Router(router)
router.start(App, 'app')
// });

var match,
  scale,
  TARGET_WIDTH = 320;
if (match = navigator.userAgent.match(/Android (\d+\.\d+)/)) {
  scale = window.screen.width / TARGET_WIDTH;
  if (parseFloat(match[1]) < 4.4) {
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', user-scalable=no');
  } else {
    document
      .querySelector('meta[name="viewport"]')
      .setAttribute('content', 'width=' + TARGET_WIDTH + ',initial-scale = ' + scale + ', target-densitydpi=device-dpi,user-scalable=no');
  }
} else {
  document
    .querySelector('meta[name="viewport"]')
    .setAttribute('content', 'width=' + TARGET_WIDTH + ',user-scalable=no');
}

document.addEventListener("touchstart", function () {}, true);

// router.history.onChange = function (e) {   console.log(e); };
// router.history.listener = function (e) {   console.log(e); };