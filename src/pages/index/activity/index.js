import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import CatNav from 'modules/common/CatNav';
import { SwipeItem,Swipe,Popup } from 'mint-ui';
import SortTab from 'modules/common/SortTab';
import LineFor2itemsMore from 'modules/index/LineFor2itemsMore';
import HotSale from 'modules/index/HotSale';
import BannerFor1plus4 from 'modules/index/BannerFor1plus4';
import NavLineFor3itemsMore from 'modules/index/NavLineFor3itemsMore';
import RecommendItems from 'modules/index/RecommendItems';
import ImgSlide from 'modules/index/ImgSlide';
import './style.less';

module.exports = entry({
  template: require('./index.tpl'),
  components: { 
    Topbar,CatNav,SortTab,LineFor2itemsMore,HotSale,BannerFor1plus4,NavLineFor3itemsMore,RecommendItems,ImgSlide,
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