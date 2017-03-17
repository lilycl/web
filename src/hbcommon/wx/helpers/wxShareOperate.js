
import {$wx} from './wxApi';

export default {
  init (routerInfo) {

    this.routerInfo = routerInfo;
    this.share = routerInfo.share;
    console.log('wx share', this.share || routerInfo);
    this.startShare();
  },

  startShare () {
    $wx.changeWxShare({})
    .then();
  }
}