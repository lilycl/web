import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
 import {CellSwipe, Cell } from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[CellSwipe.name]: CellSwipe, [Cell.name]: Cell },
  data() {
    return {
      edit: {
            show: false
        },
    };
  },
 computed: {
      allSelected() {
        return this.list.every(item => {
          return item.selected
        })
      },
  },
  events:{
    CHECK_CLICK: 'check-click'
  },
  methods: {
    init() {
    },
    select(index) {
        this.$dispatch(events.CHECK_CLICK, index );
      }
  },
  ready() {
    this.init();
    }
});