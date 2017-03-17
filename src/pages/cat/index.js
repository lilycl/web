import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import './style.less';
import { Loadmore } from 'mint-ui';
// 分类缓存
const cacheLevel = {}

export default {
  template: require('./index.tpl'),
  components: { Topbar,[Loadmore.name]:Loadmore},

  data() {
    return {
      active: 0,
      actives: 0,
      cid: 0,
      catName:'',
      catIcon:'',
      catList: {},
      catLevel: {},
      containerHeight: window.innerHeight+ 'px'
    };
  },

  methods: {
    init(active) {
      S.cat.cat({tagId:active}).then(ret => {
        this.catList = ret.data;
        //TODO 需要判断
        this.cid = ret.data[0].cid;
        this.catName = ret.data[0].cname;
        this.catIcon = ret.data[0].catIcon;
        S.cat.catLevel({tagId:active,cid:this.cid}).then(ret => {
          cacheLevel[this.cid] = ret.data;
          this.catLevel = ret.data
        });

      });
      
    },
    getCatLevel(active, id) {
      this.cid = id;
      if(cacheLevel[id]) {
        return this.catLevel = cacheLevel[id];
      }
      S.cat.catLevel({tagId:active,cid:id}).then(ret => {
        cacheLevel[id] = ret.data;
        this.catLevel = ret.data;
      });
    },
    select(active) {
        this.active = active;
        localStorage.tagId = active;
        this.actives = 0;
        this.init(active);
    },
     selects(actives,id,name,icon) {
        this.actives = actives;
        this.cid = id;
        this.catName = name;
        this.catIcon = icon;
        this.getCatLevel(this.active,id);
    }
  },
  ready() {
    localStorage.tagId = 101;
    this.active = localStorage.tagId/1;
    this.init(this.active);
  }
}