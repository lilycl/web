<template>
    <div class="cart-footer" id="order-footer">
      <div class="choose-num">合计</div>
      <strong>¥ 2873.00</strong>
      <a  class="accounts">去付款</a>
    </div>
</template>
<script>
  import S from 'service';
  export default {

    data() {
      return {

      }
   
    },
    methods: {
      init() {

      }
      
  },
    ready() {
      this.init();
    }
  };   

</script> 
<style scoped lang="less">
  @import "../../pages/common.less";
#order-footer{
	bottom: 0px;
	position: relative;
}  

#order-footer .choose-num{
	left: 15px;
}

#order-footer strong{
	left: 42px;
}


</style>