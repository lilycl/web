import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Container from 'components/Container';

import Topbar from 'modules/common/Topbar';
import CatNav from 'modules/common/CatNav';
import LineFor2itemsMore from 'modules/index/LineFor2itemsMore';
import BannerFor2plus1 from 'modules/index/BannerFor2plus1';
import BannerFor1plus4 from 'modules/index/BannerFor1plus4';
import NavLineFor3itemsMore from 'modules/index/NavLineFor3itemsMore';
import NavLineFor2itemsMore from 'modules/index/NavLineFor2itemsMore';
import RecommendItems from 'modules/index/RecommendItems';
import HotSale from 'modules/index/HotSale';
import AdBanner from 'modules/index/AdBanner';
import ImgSlide from 'modules/index/ImgSlide';
import LineFor2itemsToScene from 'modules/index/LineFor2itemsToScene';
import { Popup } from 'mint-ui';

import './style.less';

export default {
  template: require('./index.tpl'),
  components: { 
    Container, Topbar, CatNav, BannerFor2plus1, NavLineFor3itemsMore,BannerFor1plus4,NavLineFor2itemsMore,LineFor2itemsMore,ImgSlide,LineFor2itemsToScene,
    HotSale,RecommendItems,AdBanner,
    [Popup.name]: Popup
  },

  data() {
    return {
        filters: [
            {name: '推荐'},{name: '上装'},{name: '下装'},{name: '骑行'},
            {name: '健身'},{name: '瑜伽'},{name: '轮滑'},{name: '健身'},
            {name: '轮滑'},{name: '骑行'}
        ],
        imgs:['../../assets/images/index/01.png','../../assets/images/index/02.png'],
         right: {
            text: '取消',
            handle: () => {
              this.popupVisible = false;
            }
      },
        activeTab: 0,
        popupVisible: false,
        active:0,
        containerHeight: (window.screen.height-120) * 320/window.screen.width+ 'px'
       
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
};