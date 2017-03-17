import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import address from './data'

import Topbar from 'modules/common/Topbar';
import {Field, Picker, PickerSlot, Popup,Toast} from 'mint-ui';
import './style.less';
// import Vue from 'vue';
// import vueArea from 'vue-area';



module.exports = entry({
   // el: '#app',
  template: require('./index.tpl'),
  components: {
    Topbar,
    [Field.name]: Field,
    [Picker.name]: Picker,
    [PickerSlot.name]: PickerSlot,
    [Popup.name]: Popup,
    // vueArea
  },

  data() {
    return {
      right: {
        text: '保存',
        handle: this.save
      },

      title: '新建地址',
      checked:true,

      popupVisible: false,
      // result: null,
      // show: false,
     
      addressSlots: [
        {
          flex: 1,
          values: Object.keys(address),
          className: 'slot1',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['北京'],
          className: 'slot3',
          textAlign: 'center'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        },{
          flex: 1,
          values: ['朝阳区'],
          className: 'slot3',
          textAlign: 'center'
        }
      ],

      form: {
        addrId: null,
        recvAddr: '',
        recvCity: '城市',
        recvDistict: '地区',
        recvMobile: '',
        recvName: '',
        recvProv: '省份',
        isDefault: 0
      },
    };
  },

  methods: {
    init() {
       if(this.__getPageData().addrId) {
        this.form = this.__getPageData();
        this.title = '编辑地址';
      }
    },
    onAddressChange(picker, values) {
      this.addressSlots[2].values = address[values[0]];
      this.form.addressProvince = values[0];
      this.form.addressCity = values[1];
    },
    save() {
      let _form = Object.assign({}, this.form);
      if(this.checkname()&& this.checkmobile() && this.checkaddr()){
          S.user.newaddress(_form).then(ret => {           
          if(ret.status==200){
            history.go(-1)
            Toast("成功");
          }else{
            Toast("错误");
          }       
        });
        }else{
          Toast('信息有误');
        }
      
    },
    select() {
      this.form.isDefault = this.form.isDefault === 1 ? 0 : 1
    },
    showPopup(show) {
      this.popupVisible = show
    },
    checkname(){
      var regName =/^[\u4e00-\u9fa5]{2,4}$/;  
      if(!regName.test(this.form.recvName)){  
          //Toast('真实姓名填写有误'); 
          this.checked = false;
       }else{
         this.checked = true;
       }
       return this.checked
    },
    checkmobile(){
      //alert(!(/^1[34578]\d{9}$/.test(this.form.recvMobile)))
       if(!(/^1[34578]\d{9}$/.test(this.form.recvMobile))){ 
            //Toast("手机号码有误，请重填"); 
            this.checked = false;
        }else{
           this.checked = true;
        }
        return this.checked
    },
    checkaddr(){
      if(this.form.recvAddr == ''){ 
            //Toast("请填写详细地址"); 
            this.checked = false;
        }else{
           this.checked = true;
        }
        return this.checked
    }
  },
  ready() {
    this.init();
  }
});


