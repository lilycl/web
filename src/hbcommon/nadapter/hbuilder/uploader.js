const BARCODE = 'plugingaosi'

const plugin = {
  getBridge() {
    return window.plus.bridge
  },
  /**
   * 图片压缩
   */
  compress(path, cb, fail) {
    this.getBridge().exec(BARCODE, 'compressImage', [this.getBridge().callbackId(cb, fail), path, '375', '0.8'])
  },
  /**
   * 判断是否开启拍照和相册权限
   * @param type [number] 0:拍照 1:相册
   */
  cameraAndGalleryAuth(type,cb,fail) {
     this.getBridge().exec(BARCODE, 'cameraAndGalleryAuth', [this.getBridge().callbackId(cb, fail),type])
    // return this.getBridge().execSync(BARCODE, 'cameraAndGalleryAuth', [type])
  }
}

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
  * @param cb 拍照成功回调 回传file文件
  */

    pickByCamera(cb, error) {
      plugin.cameraAndGalleryAuth('0',
      //判断是否开启拍照权限
      (e)=> {
        if(e == 1){
          plus.camera.getCamera()
            .captureImage(
                function(p){
                // cb && cb(p);
                //路径转化
                plus
                  .io
                  .resolveLocalFileSystemURL( p,  ( entry ) => {
                    cb(entry.toLocalURL());
                  });
              },
              error || function(error){
                window.console.log(JSON.stringify(error));
              }
            );
        }else{
          plus.nativeUI.alert('请查看是否开启拍照权限');
        }
      });
  },
  /*
  * 相册上传
  * @param cb （Function）成功回调
  * @param cancel （Function）取消选取，回调
  * @param param （Object）控制选取的格式 单选 or 多选
  */
  pickByGallery(cb, cancel, param) {
    plugin.cameraAndGalleryAuth('1',
    (e)=> {
      if(e == 1){
        let filter = Object.assign({ 
                    filter:'image',
                    multiple: true,
                    system: false,
                  }, param);
        plus.gallery.pick((p)=>{
              cb && cb(p);
            },(e)=>{
              cancel && cancel(e);
            }, filter);
      }else{
        plus.nativeUI.alert('请查看是否开启读取相册权限');
      }
    });
   
  },
  /*
  * 图片压缩
  * @param path （String）图片路径
  * @param cb （Function）成功回调
  * @param isNative （Boolean）是否采用native的压缩，默认false（采用H5压缩）
  */
  compress(path, cb, isNative) {
    window.console.log('isNative',isNative);
    if (isNative) {
      this._compress(path, cb);
    } else {
      this.compressH5(path, cb);
    }
  },
  _compress(path, cb) {
    plugin.compress(path, cb, () => {
      alert('error');
    });
  },
  compressH5(path, cb) {
    const QUALITY = 0.8; //压缩质量
    const W = 1080; //图片宽度
    let base64 = '';
    let img = new Image();
    img.src = path;
    img.onload = function () {
      let w = this.width,
          h = this.height,
          scale = w / h; 
          w = W || w;
          h = w / scale;
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      canvas.setAttribute('height', h);
      canvas.setAttribute('width', w);
      ctx.drawImage(this, 0, 0, w, h);
      base64 = canvas.toDataURL('image/jpeg', QUALITY );
      cb && cb(base64);
    }
  }
};