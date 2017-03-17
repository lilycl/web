import date from './date';
import video from './video';


export default {
  /*
   * Date Format
   * @param date （Date）时间戳，毫秒
   * @param mask （String）转换格式 如："yyyy-mm-dd"
   * @param utc  （Boolean） 是否返回UTC时间
   * @example utils.date.format(Date.now(),'yyyy-mm-dd') -> 2016-10-19
   */
  date,
  video,
  /**
   * 判断数据是否为整形
   */
  testInt(x) {
    return x % 1 === 0;
  },

  isHB () {
    return this.getUserAgent().match(/Html5Plus/i);
  },

  isAndroid: !navigator.userAgent.match(/iPhone/i),

  isWx: navigator.userAgent.match(/MicroMessenger/i),
  // isWx: true
};
