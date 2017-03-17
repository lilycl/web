import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import CatNav from 'modules/common/CatNav';
import LineFor2itemsMore from 'modules/index/LineFor2itemsMore'
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,CatNav,LineFor2itemsMore },

  data() {
    return {
      list:[],
      filters: [],
      items:[],
    };
  },

  methods: {
    goback(){
      history.go(-1)
    },
    selectitem(index){
        this.items=[];
        console.log(this.list.vendor.vendorId)
        S.item.vendoritems({vendorId:this.list.vendor.vendorId,cids:this.filters[index].cid,pageNo:1,pageSize:20}).then(ret => {
          
          if(ret.status==200){
              console.log("成功");
              this.items=ret.data;
            }else{
              console.log("错误");
            }
        })
    },
    init() {

      S.item.getvendor({vendorId: this.__getPageData().id}).then(ret => {
        this.list = ret.data;
        this.filters = this.list.catNames;
        this.items = this.list.item;
        
      })
    }
  },
  ready() {
    this.init(); }
});