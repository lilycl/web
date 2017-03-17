/**
 * 微信api收集, 依赖于 wx 这个全局变量, 需要在weixin.js加载完成之后执行
 * @author libaoxu@gaosiedu.com
 * @author 2016-11-10
 */

/**
 * 引入wx.js window注册的全局对象
 * @type {Object}
 */
let wx = window.wx;

let $wx = {

  /**
   * 修改微信头像
   */
  changeWxTitle: (title) => {
    let body = document.body;
    let iframe = document.createElement('iframe');
    
    document.title = title;

    iframe.style.display = 'none';
    // 最神奇的这一步, 没有这个src 的变化, 就不能是微信头像变化
    iframe.src = 'icon.png';
    
    body.appendChild(iframe);

    iframe.addEventListener('load', function () {
      setTimeout(function () {
        iframe.removeEventListener('load', false);
        body.removeChild(iframe);
      }, 0);
    })

  },

  /**
   * 修改微信分享默认参数
   * @param {Object} options
   * @example 
   *  title: 标题
   *  desc: 文案
   *  link: 链接
   *  imgUrl: 图片链接
   *  toggle: 根据不同参数的配置需求, 来更换title 和 desc 文案
   */
  changeWxShare ({
    title = '',
    desc = '',
    // 默认链接到首页
    link = window.location.origin + '/#!/index',
    imgUrl,
    toggle
  }) {

    return new Promise((resolve, reject) => {

      // 分享朋友圈
      wx.onMenuShareTimeline({
        title: toggle ? desc : title,
        desc: toggle ? title : desc,
        link,
        imgUrl,
        success (res) {
          resolve(Object.assign(res, {
            origin: '分享朋友圈'
          }));
        },
        cancel () {

        }
      });

      // 发送给朋友
      wx.onMenuShareAppMessage({
        title,
        desc,
        link,
        imgUrl,
        success (res) {
          resolve(Object.assign(res, {
            origin: '发送给好友'
          }));
        }
      });

    });
  },

  /**
   * 微信选择图片
   */
  wxChooseImage (options) {
    const DEFAULT = {
      count: 1,// 默认9
      sizeType: ['compressed'], // 可以指定是原图(original)还是压缩图，默认二者都有 :
      sourceType: ['album', 'camera']// 可以指定来源是相册还是相机，默认二者都有
    };

    let params = Object.assign(DEFAULT, options);

    return new Promise((resolve, reject) => {
      wx.chooseImage({
        count: params.count, 
        sizeType: params.sizeType, 
        sourceType: params.sourceType, 
        success (res) {
          // let localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          resolve(res);
        }
      });
    });
  
  },

  /**
   * 微信上传图片
   */
  wxUploadImage (data) {
    
    return new Promise((resolve, reject) => {
      wx.uploadImage({
        localId: data.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success (res) {
          // let serverId = res.serverId; // 返回图片的服务器端ID
          resolve(res);
        }
      });
    });
  
  }

}

// wx js api下面的方法封装
export {$wx};


