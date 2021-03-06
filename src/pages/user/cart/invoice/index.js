import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CartOrders from 'modules/user/CartOrders';

import { Radio,Field, Cell} from 'mint-ui';

import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,CartOrders,
    [Radio.name]: Radio ,
    [Cell.name]: Cell,
    [Field.name]: Field
  },

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