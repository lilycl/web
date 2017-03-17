import Vue from 'vue';
import NAPI from 'nadapter';

/**
 * 无限滚动的mixin
 * 
 * @return items 需要渲染的列表
 * @return ended 是否完全加载
 * @return fetch 是否正在获取
 * @return pageNo 当前页数
 * @return showNothing 是否没有数据
 * @return fristFetch 是否是第一次获取
 * 
 * @method infinite 滑动到底部事件
 * @method getList 获取列表事件
 * @method refresh 刷新列表方法
 * @method mixinGetList 外部传入的获取列表事件
 * @method loadedDone 外部传入 加载完成事件
 */
export default {
  data() {
    return {
      fetch: false,
      fristFetch: true,
      pageNo: 1,
      ended: false,
      showNothing: false,
      items: []
    }
  },

  ready() {
    this.refresh();

    // 自动监听无限滚动事件
    if (!this.nonauto) {
      NAPI.page.scrollToBottom(() => {
        this.infinite()
      });
    }
  },

  methods: {

    infinite(id) {
      if (this.ended) return false;
      if (this.fetch) return false;

      this.pageNo++;
      this.getList(id);
    },

    refresh(id) {
      this.pageNo = 1;
      this.getList(id);
    },

    getList(id) {

      if (this.fetch) return false;

      this.fetch = true;

      this.mixinGetList(this.pageNo).then(ret => {
        this.fristFetch = false;
        this.fetch = false;

        if (ret.status && ret.data) {

          let _data = typeof ret.data.data !== 'undefined' ?  ret.data.data : ret.data

          if (_data) {
            (_data.length === 0) && (this.ended = true);

            this.showNothing = (this.pageNo == 1 && _data.length == 0);

            (this.pageNo > 1) ? this.items = this.items.concat(_data) : this.items = _data;
          } else {
            this.ended = true;
            this.showNothing = true;
          }
        } else {
          this.ended = true;
          this.showNothing = true;
          NAPI.ui.toast(ret.message);
        }
        
        (this.loadedDone)&&(this.loadedDone(id, ret));
        
      }).catch(err => {
        NAPI.ui.toast(err.message);
        this.ended = true;
      });
    }
  }
}