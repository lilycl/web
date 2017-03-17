/**
 * native loading框
 */
import utils from '../utils'

const _waiting = {}
const _loadQueues = {}

export default {
  
  /**
   * 显示loading框
   * @param id 对话框id
   * @param title: ( String ) 可选 等待对话框上显示的提示标题内容
   * @param ptions: ( WaitingOptions ) 可选 等待对话框的显示参数 可设置等待对话框的宽、高、边距、背景等样式。
   */
  show (id, title, options) {

    id = id || 'loadingdefault'
    
    if (_loadQueues[id] && _loadQueues[id].length > 0) {
      _loadQueues[id].push(1)
      return _waiting[id]
    } else {
      _loadQueues[id] = [1]
    }

    // 安卓和ios的loading不一样
    if(window.plus) {
      _waiting[id] = window.plus.nativeUI.showWaiting(title || '', options || {})
      _waiting[id].onclose = () => {
        _loadQueues[id] = []
      }
    }

  },
  
  /**
   * 隐藏带id的loading框
   */
  hide (id) {
    id = id || 'loadingdefault'

    if (_loadQueues[id]) {
      _loadQueues[id].pop()
    } else {
      this.hideAll()
    }
  },
  /**
   * 隐藏所有loading框
   */
  hideAll () {
    console.log('loaded  all')
  }
}