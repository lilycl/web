import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CatNav from 'modules/common/CatNav';
import { SwipeItem,Swipe,Popup } from 'mint-ui';
import SortLineFor2items from 'modules/index/SortLineFor2items';
import ImgSlide from 'modules/index/ImgSlide';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { 
    Topbar,CatNav,SortLineFor2items,ImgSlide,
    [SwipeItem.name]:SwipeItem, 
    [Swipe.name]:Swipe,
    [Popup.name]: Popup  },

  data() {
    return {
      right: {
            text: '取消',
            handle: () => {
              this.popupVisible = false;
            }
      },
      
      filters: [
      {name: '推荐'},{name: '上装'},{name: '下装'},{name: '骑行'},
      {name: '健身'},{name: '瑜伽'},{name: '轮滑'},{name: '健身'},
      {name: '轮滑'},{name: '骑行'}
        ],
      popupVisible: false,
      active:0,
    };
  },

  methods: {
    init() {
      
    },
    showPopup(show) {
      this.popupVisible = show
    },
    choose(index){
      this.active=index;
    }
  },
  ready() {
    this.init();
  }
});