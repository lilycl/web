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
      active:false,
    };
  },

  methods: {
    init() {
    }
  },
  ready() {
    this.init();
  }
});