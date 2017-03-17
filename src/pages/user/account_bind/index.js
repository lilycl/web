import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import { Cell } from 'mint-ui';
import Topbar from 'modules/common/Topbar';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[Cell.name]: Cell },

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