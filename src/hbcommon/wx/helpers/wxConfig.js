/**
 * 微信初始化配置文件, 需要在入口页src/main.js进行初始化
 *  注意: 依赖于 wx 这个全局变量, 需要在weixin.js加载完成之后执行
 * @author libaoxu@gaosiedu.com
 * @date 2016-11-1
 */

import utils from '../../nadapter/utils.js';
import Config from '../../../config.js';

/**
 * 微信接口配置的根路径
 * @type {String}
 */
// const ROOT_URL = "http://schoolmaster.aixuexi.com/wxConfig";
const ROOT_URL = Config.WX_ROOT_URL || "http://172.16.6.166:8026/wxConfig";

/**
 * 是否开始微信调试, 线上一定要为false
 * @type {Boolean}
 */
const WX_DEBUG = Config.WX_DEBUG || false;

/**
 * 需要用的微信的jsapi列表
 * https://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html
 * @type {String}
 * @example 'uploadImage_chooseImage_previewImage_onMenuShareTimeline_onMenuShareAppMessage'
 */
const WX_API_LIST = Config.WX_API_LIST || [
  'uploadImage', 'chooseImage', 'previewImage', 'onMenuShareTimeline', 'onMenuShareAppMessage'
].join('_');

/**
 * 微信配置的参数
 * @type {Object}
 */
const PARAMS = {

  debug: WX_DEBUG,

  jsApiList: WX_API_LIST,

  /**
   * 当前具体某个页面的名称,search 和 hash的合体, 并且转义
   * @example '?from=singlemessage&insId=24&isappinstalled=0#!/home'
   */
  referer: encodeURIComponent(location.search + location.hash)
};

/**
 * 引入wx.js window注册的全局对象
 * @type {Object}
 */
let wx = window.wx;

let s0 = document.getElementsByTagName('script')[0];
let script = document.createElement('script');

/**
 * 通过加载script标签进行配置 wx.config下面的的方法, 及wx.read 监听
 */
export default {

  /**
   * 初始化, 
   *  1 创建script标签, 进行wx.config
   *  2 监听script.onload
   *  3 wx.ready
   */
  init () {
    // 如果不在微信里, 可能是pc调试, 直接返回, 不关心分享等功能
    // if (!wx || !utils.isWx) {
    // }
    return Promise.resolve();
    
    script.src = ROOT_URL + '?' + utils.obj2Hash(PARAMS);
    s0.parentNode.insertBefore(script, s0);

    /**
     * 因为需要在配置项script加载完成 再判断 wx.ready之后, 才能执行resolve 才能执行微信相关方法
     * @return {Promise} 微信配置项的promise对象
     */
    return this.load(script)
    .then(() => {
      return this.wxReady();
    });
    
  },

  /**
   * script标签加载完成执行
   * @type {Script} script标签的dom元素
   */
  load (script) {
    return new Promise((resolve) => {
      
      if ('onload' in script) {
        script.onload = resolve;
        // 模拟接口等情况, 仅微信分享等功能失效
        script.onerror = resolve;
      } else {
        script.onreadystatechange = function () {
          if (this.readystate === 'loaded' || this.readystate === 'complete') {
            resolve();
          }
        };
      }

      
    });
  
  },

  /**
   * 微信ready 之后执行
   */
  wxReady () {

    return new Promise((resolve, reject) => {
      // 如果是微信中, 就要等wx.ready
      wx.ready((res) => {
        resolve(res)
      })

      wx.error((res) => {
        reject(res);
      });
    
    });
  }

};