import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CartOrders from 'modules/user/CartOrders';
import PayFooter from 'modules/user/PayFooter';
import { Radio,Cell,Popup } from 'mint-ui';

import './style.less';
module.exports = entry({
  template: require('./index.tpl'),

  components: { Topbar,CartOrders,PayFooter,
    [Radio.name]: Radio,[Popup.name]: Popup,[Cell.name]: Cell
  },


  data() {
    return {
      popupCouponVisible:false,
      show:false
    };
  },

  methods: {
    init() {
    },
    showPopupCoupon(show) {
      this.popupCouponVisible = show
    },
    select(){
      this.show=true;
    },
    select1(){
      this.show=false;
    }
  },
  ready() {
    this.init();
  }
});