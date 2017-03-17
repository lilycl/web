import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import UserOrders from 'modules/user/UserOrders';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,UserOrders },

  data() {
    return {
      show:true,
      active: this.__getPageData().active || 0
    };
  },

  methods: {
    init() {
    },
    select(active) {
      this.active = active;
     
    }
  },
  ready() {
    this.init();
  }
});