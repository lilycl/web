import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import {Field,Cell,Radio,Popup } from 'mint-ui'
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[Field .name]: Field,[Cell .name]: Cell,[Radio .name]: Radio,[Popup.name]: Popup  },

  data() {
    return {
       popup1Visible: false
    };
  },

  methods: {
    init() {
    },
    showPopup1(show) {
      this.popup1Visible = show
    }
  },
  ready() {
    this.init();
  }
});