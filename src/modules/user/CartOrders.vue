<template>
 <div class="ml-content cartOrders-info">
      <h3>adidas 官方旗舰店</h3>
      <item-card></item-card>
      <div class="freight clear">
          <h4 class="fl">配送运费</h4>
          <p class="fr">快递  ¥ 10.00</p> 
      </div>
      <div class="freight clear" >
          <h4 class="fl">店铺优惠券</h4>
          <p class="fr">满100减10元 <span>-¥ 10.00</span></p> 
          <i></i>
      </div>
      <div class="freight clear" @click="__gotoPage('invoice')">
          <h4 class="fl">发票信息</h4>
          <p class="fr">不开发票 </p> 
          <i></i>
      </div>
      <div class="freight clear" style="border-bottom: 0.5px solid #eee; ">
          <h4 class="fl">买家留言：</h4>
          <input type="text" placeholder="选填（对本次交易的说明）">
      </div>
      <p class="subtotal">共计 <span>1</span> 件商品   &nbsp;小计  <strong>¥ 40.00</strong> 元</p>
  </div>
</div>
</template>    

<script>
  import S from 'service';
  import { Cell} from 'mint-ui';
  import ItemCard from '../common/ItemCard'
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
 
  components: { 
    ItemCard,
    [Cell.name]: Cell
  },
    props: props,
    data() {
      return {
        list: [],
         detail: {}
      };
   
    },
    methods: {
      init() {

      },
   },
    ready() {
         S.order.getDetail({}).then(ret => {
        this.detail = ret.data;
      })
    }
  };   

</script> 

<style lang="less">
@import "../../pages/common.less";
.ml-content {
  p{
    margin-right: 25px;
    font-size: 11px;
    color: #9b9b9b;
    span{
      color: @com-base;
      margin-left: 5px;
    }
  }
  i{
    width: 5px;
    height: 10px;
    background: url(../../assets/images/user/goto_next.png) no-repeat; 
    background-size: cover;
    position: absolute;
    right: 15px;
    top:15px;
  }
}
.freight{
  height: 39px;
  border-top: 0.5px solid #eee; 
  line-height: 39px;
  font-size: 11px;
  position: relative;
  h4{
    text-indent: 15px; 
    height: 100%;
    line-height: 39px;
    
  }
  input{
    vertical-align: top;
  }
}
.ml-content .subtotal{
  font-size: 10px; 
  color: #9B9B9B;
  line-height: 40px;
  text-indent: 155px;
    margin-right: 0px;
 
  strong{
    font-size: 11px;
    color: @com-base;
    font-weight: 400;
    margin-left: 4px;
  }
}

</style>