const BARCODE = 'plugingaosi'

const plugin = {
  getBridge() {
    return window.plus.bridge
  },
  /**
   * 图片放大
   */
  pictureZoom(path, cb, fail) {
    this.getBridge().exec(BARCODE, 'pictureZoom', [this.getBridge().callbackId(cb, fail), path])
  }
}

export default {
 /**
  * 图片放大
  */
  pictureZoom(path) {
    plugin.pictureZoom(path,() => {
      window.console.log(path);
    });
  }
};