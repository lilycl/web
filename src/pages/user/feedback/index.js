import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import { Field } from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,[Field.name]: Field },

  data() {
    return {
      styleObject: {
        height:'133px'
      },
      feedback:'',

    };
  },

  methods: {
    init() {
    },
    submit(){
     console.log(this.feedback)
      S.user.feedback({fbContent:this.feedback}).then(ret => {
        if(ret.status==200){
          console.log("成功");
        }else{
          console.log("错误");
        }
      });
    }

  },
  ready() {
    this.init();
  }
});