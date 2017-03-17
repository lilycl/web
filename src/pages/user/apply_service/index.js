import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import {Field } from 'mint-ui'
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[Field .name]: Field  },

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