import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import { Cell } from 'mint-ui';
import './style.less';
export default {
  template: require('./index.tpl'),
  components: { 
    Topbar,
    [Cell.name]: Cell
  },

  data() {
    return {
      list: [],

    };
  },

  methods: {
    init() {
      S.user.uInfo().then(ret => {
         this.list = ret.data;  
         console.log(this.list.userAccount);  
      });
    }
  },
  ready() {
    this.init();

  }
};