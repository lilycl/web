import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar },

  data() {
    return {
      active: 0,
      list:[],
    };
  },
  methods: {
    init() {
      S.user.getcoupon({}).then(ret => {
        this.list = ret.data;
      });
    },
    select(active) {
        this.active = active
    },
    gotoindex(){
      window.sessionStorage.setItem("TAB_SHOW",0);
      this.__gotoPage("index");
    }
  },
  ready() {
    this.init();
  }
});