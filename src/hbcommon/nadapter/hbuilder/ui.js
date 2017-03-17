/**
 * native界面接口
 */

export default {

  /**
   * ToastOption:
      icon: (String 类型 )提示消息框上显示的图标
      duration: (String 类型 )提示消息框显示的时间
      可选值为"long"、"short"，值为"long"时显示时间约为3.5s，值为"short"时显示时间约为2s，未设置时默认值为"short"。
      align: (String 类型 )提示消息框在屏幕中的水平位置
      可选值为"left"、"center"、"right"，分别为水平居左、居中、居右，未设置时默认值为"center"。
      verticalAlign: (String 类型 )提示消息在屏幕中的垂直位置
      可选值为"top"、"center"、"bottom"，分别为垂直居顶、居中、居底，未设置时默认值为"bottom"。
   */
  toast (message, options) {
    window.plus.nativeUI.toast(message, options)
  },
  
  alert(message, cb) {
    window.plus.nativeUI.alert(message, cb);
  },

  /**
   *  message: ( String ) 必选 确认对话框上显示的内容
      confirmCB: ( ConfirmCallback ) 可选 确认对话框关闭后的回调函数
      回调函数中包括Event参数，可通过其index属性（Number类型）获取用户点击按钮的索引值。
      title: ( String ) 可选 确认对话框上显示的标题
      buttons: ( Array[ String ] ) 可选 确认对话框上显示的按钮
      字符串数组，每项对应在确认对话框上显示一个按钮，用户点击后通过confirmCB返回用户点击按钮的在数组中的索引值。
   */
  confirm(message, confirmCB, title, buttons) {
    window.plus.nativeUI.confirm( message, confirmCB, title, buttons );
  },

  showWaiting() {
    return window.plus.nativeUI.showWaiting();
  },

  /**
   * nativeUI 选择日期控件
   * @params options {
   *  title: ''
   *  date: '当天日期'
   *  minDate: '最小日期'
   *  maxDate: '最大日期'
   * }
   */
  pickDate(done, fail, options) {
    plus.nativeUI.pickDate( done, fail || function(){}, options || {});
  },

  /**
   * nativeUI 选择日期控件
   * @params options {
   *  title: ''
   *  is24Hour: '是否24小时制模式'
   *  popover: '格式如{top:10;left:10;width:200;height:200;}，所有值为像素值，其值相对于容器webview'
   *  maxDate: '最大日期'
   * }
   */
  pickTime(done, fail, options) {
    plus.nativeUI.pickTime( 
      done, 
      fail || function(){}, 
      options || {is24Hour: true}
    );
  }

}