import entry from 'entry'
import NAPI from 'nadapter'
import S from 'service'
import {Cell} from 'mint-ui'
import Topbar from 'modules/common/Topbar'
import Info from './Info'
import html5ImgCompress from 'html5-image-compress'

import './style.less'

module.exports = entry({
  template: require('./index.tpl'),
  components: {
    Topbar,
    Info,
    [Cell.name]: Cell
  },

  data() {
    return {
      edit: {
        key: '',
        title: '',
        show: false,
        form: {}
      }
    }
  },

  methods: {
    init() {
      S.user
       .getInfo({})
       .then(ret => {
          this.edit.form = ret.data;
       })

      this.$els.photo.addEventListener("change", (e) => {
        new html5ImgCompress(e.target.files[0], {
          before: (file) => {},
          done:  (file, base64) => {
            this.edit.form.user.image = base64
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
    itemClick(key, title) {
      this.edit = Object.assign({}, this.edit, {
        key: key,
        show: true,
        title: '修改' + title
      })
    }
  },
  ready() {
    this.init()
  }
})