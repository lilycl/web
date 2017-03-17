import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar },

  data() {
    return {
      list:[],
    };
  },

  methods: {
    init() {
      S.vendor.vendordetail({vendorId: this.__getPageData().id}).then(ret => {
        this.list = ret.data;
        console.log(this.list.brandAuthority)
      
        
      })
    }
  },
  ready() {
    this.init(); }
});