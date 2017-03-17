import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Star from 'components/Star';
import Topbar from 'modules/common/Topbar';
import ItemCard from 'modules/common/ItemCard';
import {Field} from 'mint-ui';
import { Toast } from 'mint-ui'
import html5ImgCompress from 'html5-image-compress'
import './style.less';

module.exports = entry({
  template: require('./index.tpl'),
  components: {
    Topbar,
    ItemCard,
    Star,
    [Field.name]: Field
  },

  data() {
    return {
      form: {
        id: '',
        imgs: [],
        qualityStar: 0,
        serviceStar: 0
      },
      edit: {
        key: '',
        title: '',
        show: false,
        form: {}
      }
    };
  },

  methods: {
    init() {
        this.$els.photo.addEventListener("change", (e) => {
          new html5ImgCompress(e.target.files[0], {
            before: (file) => {},
            done:  (file, base64) => {
              this.edit.image = base64
              console.log(file, base64)
            },
            fail: (file) => {
              console.log('压缩失败...');
            },
            complate: (file) => {
              console.log('压缩完成...');
            },
            notSupport: (file) => {
              console.log('浏览器不支持！')
            }
          });
        }, false)
    },

    qualityStar(score) {
      this.form.qualityStar = score
    },
    submit(){
      let _form = Object.assign({}, this.form);
      S.order.getCommentList({_form}).then(ret => {
        if(ret.status==200){
          history.go(-1)
          Toast("提交成功");
        }else{
          Toast("提交失败");
        }
      });
    }
  },
  ready() {
    this.init();
  }
});