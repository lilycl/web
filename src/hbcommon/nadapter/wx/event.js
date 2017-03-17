/**
 * 手机事件监听
 */

export default {
  addEventListener(event, callback, capture) {
    window.addEventListener(event, callback, capture);
  },

  removeEventListener(event, callback) {
    window.removeEventListener(event, callback);
  },

  /**
   * 监听网络变化
   */
  netchange(callback) {
    document.addEventListener('netchange', callback, false)
  },

  // 监听返回按钮事件
  listenBack(callback) {
    this.addEventListener('backbutton', callback, false)
  }
}