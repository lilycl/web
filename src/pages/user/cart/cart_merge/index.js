import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CartMergeFor2items from './CartMergeFor2items.vue';

// import { } from 'mint-ui';

import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,CartMergeFor2items
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