
/**
 * 单例, 返回方法, instance作为闭包中存储的单例变量
 */
let __instance__ = (function () {
  let instance;

  return (newInstance) => {
    if (!instance) {
      instance = newInstance;
    }
    return instance;
  }
} ())


/**
 * 默认配置参数
 * @type {Object}
 */
const DEFAULT = {
  // 信息
  message: '提示',
  // 位置, 后期支持
  position: 'center',
  // 时间
  duration: 1800
};


class Toast {

  constructor (options) {

    if (__instance__(null)) {
      return __instance__(null)
    }

    __instance__(this);
    
    this.initNode();
  }

  /**
   * 将创建的dom放入this中
   */
  initNode () {

    let nodeObj = _createNodes();
    this.toastWraper = nodeObj.toastWraper;
    this.toastText = nodeObj.toastText;

    window.addEventListener('DOMContentLoaded', () => {
      document.body.appendChild(this.toastWraper);
    });

  }

  show (options) {
    // 合并配置参数
    this.options = Object.assign({}, DEFAULT, options);

    // 如果只穿了字符串, 则放入message中
    if (options && typeof options !== 'object') {
      this.options.message = options;
    }

    this.toastWraper.style.display = 'block';
    this.toastText.innerText = this.options.message;

    this.afterShow();
  }

  afterShow () {
    clearTimeout(this.tid);

    // 默认1.58s 后关闭toast
    this.tid = setTimeout(() => {

      clearTimeout(this.tid);
      this.toastWraper.style.display = 'none';

    }, this.options.duration);

  }

  hide () {
    this.toastWraper.style.display = 'none';
  }

}


function _createNodes () {
  const toastWraper = document.createElement('div');
  const toastText = document.createElement('div');

  toastWraper.style.cssText = `
      position: fixed;
      max-width: 80%;
      top: 50%;
      left: 50%;
      display: none;
      background-color: rgba(0, 0, 0, .7);
      color: #fff;
      padding: 10px;
      border-radius: 5px;
      z-index: 99;
      -webkit-box-sizing: border-box;
                    box-sizing: border-box;
      -webkit-transform: scale(1) translate(-50%,-50%);
                transform: scale(1) translate(-50%,-50%);
  `;

  toastText.style.cssText = `
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
  `;

  toastWraper.appendChild(toastText);  

  return {
    toastWraper,
    toastText
  }
}


export default Toast;