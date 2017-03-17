import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import CommentMy from './CommentMy';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,CommentMy },

  data() {
    return {  
    commentList: [],
    active: 0,
    right: {
      text: '写评价',
      handle: () => {
        this.__gotoPage('order_list',{active:4})
      }
    }
  };
  },

  methods: {
    init() {
      S.user.CommentList({}).then(ret => {
        this.commentList = ret.data;
      });
    },
    select(active) {
        this.active = active
    }
  },
  ready() {
    this.init();
  }
});