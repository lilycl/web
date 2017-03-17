import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import { Toast } from 'mint-ui'
import './style.less';

const INTERVAL_VALUE = 60
let timeInterval = null

module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar },

  data() {
    return {
      sendInfo:[],
      mobile: '13521957015',
      code:'',
      status:0,
      interval: 0
    };
  },

  methods: {
    init() {

    },

    sendCode(){
      //'13521957015'
        if(!(/^1[34578]\d{9}$/.test(this.mobile))){ 
            Toast("手机号码有误，请重填");  
            return false; 
        }else{
          this.interval = INTERVAL_VALUE;
          this.timing()
          S.user.send({mobile:this.mobile}).then(ret => {
            if(ret.status==200){
              console.log("成功");
            }else{
              console.log("错误");
            }
          });
        }
    },
    timing() {
      timeInterval = setInterval(() => {
        if(this.interval === 0) {
          return clearInterval(timeInterval)
        }
        this.interval -= 1
      }, 1000)
    },
    bind(){
      if(this.mobile=="" || !/^\d{6}$/.test(this.code)){
        Toast("手机号或验证码有误");
        return false;
      }else{
        S.user.bind({mobile:this.mobile,valiCode:this.code}).then(ret => {
           this.status = ret.status;
          if(ret.status==200){
            console.log("成功");
          }else if(ret.status==404){
            console.log("验证码失效");
          }else if(ret.status==500){
            console.log("验证码错误");
          }
        });
      }
    }

  },
  ready() {
    this.init();
  }
});