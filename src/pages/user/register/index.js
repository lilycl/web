import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import Topbar from 'modules/common/Topbar';
import './style.postcss';
import { Toast } from 'mint-ui'
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,Toast },

  data() {
    return {
      form: {
            phone: '',
            vcode: '',
            password: '',
            password2: ''
        },

        phoneError: false,
        vcodeError: false,
        passwordError: false,
        password2Error: false
    };
  },

  methods: {
    init() {
    },
    validate() {
    if(this.form.phone === '') {
        this.phoneError = true
        return false
    }

    if(this.form.vcode === '') {
        this.vcodeError = true
        return false
    }

    if(this.form.password === '') {
        this.passwordError = true
        return false
    }

    if(this.form.password2 === '') {
        this.password2Error = true
        return false
    }

    return true
    },

    reg() {
        if(this.validate()) {
            Toast('注册成功')
            NAPI.page.open('login')
            let _form = Object.assign({}, this.form)
            S.user.reg(_form).then(ret => {
                NAPI.page.open('login')
            })
        }
      }
  },
  ready() {
    this.init();
  }
});