
import Toast from './comp/toast.js';
import AutoLoading from '../../service/autoloading.js';

let toast = new Toast();
let autoLoading = new AutoLoading();

export default {
  toast (message) {
    toast.show(message);
  },

  /**
   * 等待框
   */
  showWaiting() {
    // return window.plus.nativeUI.showWaiting();
    autoLoading.show();

    return {
      close () {
        autoLoading.hide();
      }
    };
  },

  alert (message,callback) {
    window.alert(message);
    callback();
  },

  /**
   * 按钮的ui组件
   * @param {String} message 消息内容
   * @param {Function} confirmCB 回调函数
   * @param {String} title 标题
   * @param {Array} buttons 自定义按钮名称, 回调函数返回对应的按钮点击index
   *        @example ['吃饭', '睡觉']
   */
  confirm(message, confirmCB) {
    let index = 1;
    if(confirm(message)) {
      index = 0;
    }
    confirmCB({index});
  }
}