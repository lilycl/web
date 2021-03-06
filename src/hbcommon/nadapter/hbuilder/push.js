export default {
  clear() {
    plus.push.clear();
  },
  /*
  * Click事件监听:
  * 应用在运行，用户点击了消息中心的消息，会触发click事件
  */
  onClick(cb) {
    // 监听点击消息事件
    plus.push.addEventListener( "click", cb, false );
  },
  /*
  * receive事件监听：
  * 如果客户端正在前台操作，并且已经监听了receive事件，
  * 则会触发这个事件。在IOS平台，应用在前台操作时消息不会进入消息中心
  */
  onReceive(cb) {
    // 监听在线消息事件
    plus.push.addEventListener( "receive", cb, false );
    
  }
}