import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import ItemCard from 'modules/common/ItemCard';
import Package from './Package';

import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar ,Package,ItemCard},

  data() {
    return {
      active: 0
    };
  },

  methods: {
    init() {
    },
    select(active) {
        this.active = active
    }
  },
  ready() {
    this.init();
  }
});