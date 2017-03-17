import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import { Cell } from 'mint-ui';
import Topbar from 'modules/common/Topbar';
import { Search } from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[Cell.name]: Cell,[Search.name]: Search },
  data() {
    return {
        list: [],
        item:[],
        active: 0,
        activeIndex:-1,

    };
  },
  methods: {
    init() {
      S.user.help().then(ret => {
         this.list = ret.data; 
      });
       
    },
    select(active) {
        this.active = active;
        this.list.data=[];
        let id=this.list.firstHelpCat[active].cid/1;
        S.user.helpcat({cid:id,platId:1}).then(ret => {
           if(ret.status==100){
              console.log("成功");
              this.list.data=ret.data;
              this.activeIndex = -1;
            }else{
              console.log("错误");
            } 
        });
    },
    question(index){
      if(this.activeIndex === index){
        this.activeIndex = -1;
      }else{
        this.activeIndex = index;
      }
    }
  },
  ready() {
    this.init();
  }
});