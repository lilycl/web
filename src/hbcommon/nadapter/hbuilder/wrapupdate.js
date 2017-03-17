/**
 * 更新应用
 */
import runtime from './runtime'
import update from './update'
import utils from '../utils'
import Config from '../../../config'
export default(appid, checkUrl, done) => {
  let version = runtime.version();//ios:1.3.2 andirod:1.0
  let firstVersion = version.substring(0,1);
  let secondVersion = version.substring(2,3);
  if(firstVersion == 1 && secondVersion < 4 ) {
    updateWrap();
  }else{
    update(appid, checkUrl, done);
  }
  // update(appid, checkUrl, done);
}
/**
 * 强制更新的方法
 */
function updateWrap() {
  let div = document.createElement("div");
  div.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;color:#fff;text-align:center;z-index:2001;background-color:#000;opacity:0.4;";
  let body = document.getElementsByTagName('body')[0];
  body.appendChild(div);
  const title = "有新功能需更新：";
  const message = "支持微信支付啦！多个学员的家长能够切换学员账号";
  const buttons = ["更新"];
  let confirmCB=function(e) {
   if(e.index == 0) {
    if(utils.isAndroid) {
      plus.runtime.openURL(Config.ANDROID_URL,()=>{
        alert("更新失败，请手动去应用商店更新")
      });
    }else{
      plus.runtime.openURL(Config.IOS_URL,()=>{
        alert("更新失败，请手动去应用商店更新")
      },"高思教育");
    }
   }

  }
  plus.nativeUI.confirm(message, confirmCB, title, buttons)
}