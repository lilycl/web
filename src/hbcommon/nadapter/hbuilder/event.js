/**
 * 手机事件监听
 */
import utils from '../utils'

export default {
  addEventListener(event, callback, capture) {
    window.plus.key.addEventListener(event, callback, capture);
  },

  removeEventListener() {

  },

  /**
   * 监听网络变化
   */
  netchange(callback) {
    document.addEventListener('netchange', () => {
      callback(plus.networkinfo.getCurrentType())
    }, false)
  },

   // 监听返回按钮时间
  listenBack(callback) {
    if (utils.isAndroid) {
      this.addEventListener('backbutton', callback, false)
    } else {
      window.plus.webview.currentWebview().addEventListener( "popGesture", callback, false );
    }
  }
}