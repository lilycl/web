const AT = 'pop-in'
import utils from '../utils';
var openw = null;


export default {
  back(hide) {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  },
  open(id, params) {
    let _params = params ? {
      params: encodeURIComponent(JSON.stringify(params))
    } : '';

    __router__.go({
      name: id,
      // query 传递必须要对象
      // 在app.js  __getPageData 方法中, 也需要返回 this.$router._currentRoute.query.params;
      query: _params
    });
  },

  getCurrent() {
    return {
      close: function () { }
    }
  },

  setDebugUrl() { },

  exec() {

  },

  /**
   * 关闭当前webview
   * vue-router 不用关闭, 这里放个空方法
   */
  closeCurrent() {
    
  },

  close (id) {

  },
    /**
     * 得到所有webview
     * vue-router 无法 获取所有的webview  暂时写一个空方法
     */
  getAll() {
    return [];
  },

  prepare() { },
  getLaunch() { },
  immersed() {
    return 0;
  },
  /**
   * 监听页面滚到底部时间
   */
  scrollToBottom(done, capture, iHeight) {
    window.onscroll = () => {
      if (document.body.scrollTop + window.innerHeight + (iHeight || 5) >= document.body.scrollHeight) {
        done()
      }
    }
  }
}