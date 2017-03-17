import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import UserOrders from 'modules/user/UserOrders';
import PayFooter from 'modules/user/PayFooter';
import StatUs from './StatUs';
import Bill from './Bill';
import PayList from './PayList';
import { Radio } from 'mint-ui';
import { Cell } from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,UserOrders,PayFooter,StatUs,Bill,PayList,[Radio.name]: Radio,[Cell.name]: Cell },

  data() {
    return {
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