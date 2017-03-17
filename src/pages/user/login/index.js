import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import './style.less';
import { Toast } from 'mint-ui';

module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,Toast },

  data() {
    return {
        form: {
            account: '',
            password: ''
        },

        accountError: false,

        passwordError: false,
         right: {
          text: '注册',
          handle: () => {
            this.__gotoPage('register')
          }
        },
    };
  },

  methods: {
    init() {
    },

    validate() {
        if(this.form.account === '') {
            this.accountError = true
            return false
        }

        if(this.form.password === '') {
            this.passwordError = true
            return false
        }

        return true
    },

    login() {
        if(this.validate()) {
            Toast('登录成功')
            NAPI.page.open('index')
            let _form = Object.assign({}, this.form)
            S.user.login(_form).then(ret => {              
                NAPI.page.open('index')
            })
        }
    }
  },
  ready() {
    this.init();
  }
});