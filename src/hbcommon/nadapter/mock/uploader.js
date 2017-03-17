/*
* 上传控件
*/

// 产生一个随机数
function getUid(){
  return Math.floor(Math.random()*100000000+10000000).toString();
}
export default {
  /*
  * 上传图片
  * @param server (String) 必需 上传图片路径
  * @param param (Object) 必需 上传参数 { method: 'POST', files: []}
  * @param cb 回调
  */
  upload(server, param, cb ) {
    let files = param.files || [];
    if(files.length<=0){
      plus.nativeUI.alert('没有添加上传文件！');
      return;
    }
    const wt = plus.nativeUI.showWaiting();
    const task = plus.uploader.createUpload(server,
      {method: param.method},
      function(t,status){ //上传完成
        if(status==200){
            wt.close();
            cb && cb(t);
        }else{
          plus.nativeUI.alert('上传失败！');
          wt.close();
        }
      }
    );

    task.addData('client','HelloH5+');
    task.addData('uid', getUid());
    
    files.forEach(item => {
      task.addFile(item.path, { key: item.name });
    });
    
    task.start();
  },
  /*
  * 拍照上传
  */
  pickByCamera(cb) {
    plus.gallery.pick(function(p){
      cb && cb(p);
    });
  },
  /*
  * 相册上传
  * @param param （Object）控制选取的格式 单选 or 多选
  */
  pickByGallery(cb, param) {
    let filter = param || { 
                  filter:'image',
                  multiple: true,
                  system: false,
                };
    plus.camera
        .getCamera()
        .captureImage(function(p){
          cb && cb(p);
        }, filter);
  }
};