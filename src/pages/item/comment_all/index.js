import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CommentList from 'modules/item/CommentList';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,CommentList },

  data() {
    return {
    };
  },

  methods: {
    init() {
    }
  },
  ready() {

  }
});