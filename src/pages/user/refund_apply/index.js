import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import {Cell,Field,Radio,Popup} from 'mint-ui'
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,
    [Cell .name]: Cell,[Field .name]: Field,[Radio .name]: Radio,[Popup.name]: Popup},

  data() {
    return {
      popup1Visible: false,
      popup2Visible: false,
      popup3Visible: false,
      right: {
      text: '帮助',
      handle: () => {
        this.__gotoPage('help')
      }
    }
    };
  },

  methods: {
    init() {
    },
    showPopup1(show) {
      this.popup1Visible = show
    },
    showPopup2(show) {
      this.popup2Visible = show
    },
    showPopup3(show) {
      this.popup3Visible = show
    }
  },
  ready() {
    this.init();
  }
});