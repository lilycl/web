/**
 * hbuilder 分享接口
 */

export default {
  /**
   * 分享到微信
   * @param title [string] 分享标题
   * @param content [string] 分享内容
   * @param href [string] 分享链接
   * @param scene [string] 默认为分享给朋友
   * @param pictures [string] 分享消息的图片 分享消息中包含的图片路径，仅支持本地路径。 若分享平台仅支持提交一张图片，传入多张图片则仅提交第一张图片
   * @param thumbs [string] 分享消息中包含的缩略图路径
   */
  shareWX(title, content, href, scene, pictures, thumbs){
  },

  /**
   * 获取分享渠道
   */
  getShareService(done){
    plus.share.getServices(done, function(e){
      done([])
    })
  }
}