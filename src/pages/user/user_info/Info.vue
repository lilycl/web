<template>
 
  <mt-popup
      :visible.sync="edit.show"
      position="right"
      style="width: 100%;height: 100%;"
  >
    <topbar 
        fixed 
        :right="right"
        @back="hideModal" 
        :autoback=false 
        :title="edit.title">
    </topbar>
<div style="margin-top: 10px;">     
    <div v-show="edit.key === 'sex'">
      <mt-radio
        align="right"
        v-model="edit.form.sex"
        :value="edit.form.sex"
        :options="[{label: '男', value: m}, {label: '女', value: f},{label: '保密', value: s}]">
      </mt-radio>
    </div>

    <div v-show="edit.key === 'userNick'">
      <mt-field 
        :value.sync="edit.form.userNick" 
        label=""  
        placeholder="请输入昵称">
      </mt-field>
    </div>

    <div v-show="edit.key === 'signature'">
      <mt-field 
        :value.sync="edit.form.userSign" 
        label="" 
        type="textarea"
        placeholder="请输入个性签名">
      </mt-field>
    </div>

    <div v-show="edit.key === 'birth'">
      <mt-field 
        :value.sync="edit.form.birthDay" 
        label="" 
        type="date"
        placeholder="请输入出生日期">
      </mt-field>
    </div>

    <div v-show="edit.key === 'height'">
      <mt-field 
        :value.sync="edit.form.height" 
        label="" 
        type="number"
        placeholder="请输入身高">
      </mt-field>
    </div>

    <div v-show="edit.key === 'weight'">
      <mt-field 
        :value.sync="edit.form.weight" 
        label="" 
        type="number"
        placeholder="请输入体重">
      </mt-field>
    </div>
</div>    
</mt-popup>
</template>

<script>
  import S from 'service';
  import { Cell, Radio, Field, Popup } from 'mint-ui';
  import Topbar from 'modules/common/Topbar';

  const props = ['edit']
  const events = {
  };

  export default {
  	components: {
      Topbar,
      [Popup.name]: Popup, [Cell.name]: Cell ,[Radio.name]: Radio , [Field.name]: Field
    },
    props: props,
    data() {
      return {
        right: {
            text: '保存',
            handle: this.submit
        }
      }
    },
    methods: {
      init() {
      },
      hideModal() {
        this.edit.show = false
      },
      submit() {
        let _form = Object.assign({}, this.edit.form);
        this.edit.show = false
        S.user.putInfo(_form).then(ret => {
            
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
  };   

</script>
<style type="text/css">
	
</style>