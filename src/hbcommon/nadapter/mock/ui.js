import AutoLoading from '../../service/autoloading.js';

let autoLoading = new AutoLoading();

export default {
  toast (message) {
    window.console.log('mock-log::',message)
  },
  alert (message) {
    window.alert(message);
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

    /**
   *  message: ( String ) 必选 确认对话框上显示的内容
      confirmCB: ( ConfirmCallback ) 可选 确认对话框关闭后的回调函数
      回调函数中包括Event参数，可通过其index属性（Number类型）获取用户点击按钮的索引值。
      title: ( String ) 可选 确认对话框上显示的标题
      buttons: ( Array[ String ] ) 可选 确认对话框上显示的按钮
      字符串数组，每项对应在确认对话框上显示一个按钮，用户点击后通过confirmCB返回用户点击按钮的在数组中的索引值。
   */
  // confirm(message, confirmCB, title, buttons) {
  //   window.plus.nativeUI.confirm( message, confirmCB, title, buttons );
  // },

  confirm(message, confirmCB,title,buttons) {
    // let button = "";
    // buttons.map((value) => {
    //   button+="<button>"+value+"</button>"
    // });
    // // document.getElementsByTagName('body')[0],
    // <style type="text/css">
    //   #confirm {
    //     width:80vw;
    //     height:30vw;
    //     background:#fff;
    //     line-height:10vw;
    //     position:absolute;
    //     top:50%;
    //     left:50%;
    //     transform:translate(-50%,-50%);
    //   }
    //   #confirm .title{
    //     height:10vw;
    //   }
    // </style>
    // <div id="confirm">
    //   <div  class="title">
    //     +title+
    //   </div>
    //   <div class="message">
    //     +message+
    //   </div>
    //   <div class="buttons">
    //     +button+
    //   </div>
    // </div>

    if(confirm(message)) {
      confirmCB()
    }
  }
}