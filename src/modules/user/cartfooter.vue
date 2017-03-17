<template>
   <div class="cart-footer">
        <div class="cart-point cart-pointall"><i></i></div>
        <div class="choose-num">已选(<span>4</span>)</div>
        <a href="javascript:;" class="con-btn wish-list">移到心愿单</a>
        <a href="javascript:;" class="con-btn accounts">删除</a>
    </div>
</template>
<script>
  import S from 'service';

  const props = {
    /**
     * 购物车商品列表
     * @type {Object}
     */
    list: {
      type: Array,
      default: []
    }
  };

  const events = {
  };

  export default {
    props: props,
    data() {
      return {
        list: [],
        
      };
   
    },
    methods: {
      init() {
        S.order.getmyList({}).then(ret => {
          this.list = ret.data;

        }).catch(err => {

        });
      },
      
  },
    ready() {
      this.init();
    }
  };   

</script> 
<style scoped>
  @import "../../pages/common.less";
.cart-footer{
  width: 100%;
  height: 40px;
  background: #fff;
  position: fixed;
  bottom:40px;
  z-index: 999; 
  border-bottom: 1px solid #E9E9E9;
}

.cart-footer .cart-point{
  top:20px;
}
.cart-footer .choose-num{
  font-size: 9px;
  position: absolute;
  left: 32px;
  top:14px;
}
.cart-footer strong{
  font-size: 12px;
  position: absolute;
  left: 150px;
  top:14px;
}
.cart-footer .accounts{
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  background: #CBCBCB;
  text-align: center;
  line-height: 40px;
  color: #000;
}
#cart-footer{
  bottom: 40px;
  border-bottom: 1px solid #E9E9E9;
}
#cart-footer .cart-point{
  top:15px;
}
.con-btn{
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  text-align: center;
  line-height: 40px;
  color: #000;
}

.wish-list{
  right: 100px;
  background: #e9e9e9;
}

.cart-point{
  width: 12px; 
  height: 12px; 
  border-radius: 50%; 
  border:0.5px solid #E0DEDE; 
  position: absolute; 
  left:0px; 
  top:0px;
}

.cart-point i{
  width: 8px; 
  height: 8px;  
  border-radius: 50%;
  background: #9b9b9b; 
  position: absolute;
  left:2px; 
  top:2px;
  display: none;
}

.cart-pointall{
  left:10px; 
  top: 50%; 
  margin-top: -6px;
}

</style>