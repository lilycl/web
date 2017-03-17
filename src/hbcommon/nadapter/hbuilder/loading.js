/**
 * native loading框
 */
import utils from '../utils'
import Config from '../../../config'

const _waiting = {}
const _loadQueues = {}

const androidLoading = (isShow) => {
  window.plus.bridge.exec('plugingaosi', 'showLoading', [isShow])
}

export default {
  
  /**
   * 显示loading框
   * @param id 对话框id
   * @param title: ( String ) 可选 等待对话框上显示的提示标题内容
   * @param ptions: ( WaitingOptions ) 可选 等待对话框的显示参数 可设置等待对话框的宽、高、边距、背景等样式。
   */
  show (id, title, options) {
    window.plus.nativeUI.showWaiting(title || '', options || {})

    id = id || 'loadingdefault'

    if (_loadQueues[id] && _loadQueues[id].length > 0) {
      _loadQueues[id].push(1)
      return _waiting[id]
    } else {
      _loadQueues[id] = [1]
    }

    /**
     * 关闭teacher, andriod端用原生loading
     * modify by libaoxu@gaosiedu.com 2016-12-01
     */
    // if (Config.APP_SCHEME === 'teacher' && utils.isAndroid) {
    //   androidLoading(true)
    // } else {
      _waiting[id] = window.plus.nativeUI.showWaiting(title || '', options || {})
      _waiting[id].onclose = () => {
        _loadQueues[id] = []
      }
    // }
  },
  
  /**
   * 隐藏带id的loading框
   */
  hide (id) {
    id = id || 'loadingdefault'

    if (_loadQueues[id]) {
      _loadQueues[id].pop()
      
      if (_loadQueues[id].length === 0) {
        // _waiting[id].close()
        this.hideAll()
      }
    } else {
      this.hideAll()
    }
  },
  /**
   * 隐藏所有loading框
   */
  hideAll () {
    // if (Config.APP_SCHEME === 'teacher' && utils.isAndroid) {
    //   androidLoading(false)
    // } else {
      window.plus.nativeUI.closeWaiting()
    // }
  },

  /**
   * 返回plus.nativeUI.showWaiting方法创建的Waiting对象
   * close: 关闭显示的系统等待对话框
   * 事件：
   * onclose: 等待对话框关闭事件
   * 
   * @param {String} id loading.show() 第一个参数
   * @returns {Waiting} plus.nativeUI.showWaiting方法创建的Waiting对象
   * @example http://www.html5plus.org/doc/zh_cn/nativeui.html#plus.nativeUI.Waiting
   */
  getWaitingById (id) { 
    return _waiting[id] || {};
  }
  
}