<template>
  <div class="item-card clear"> 
      <div class="imgwrap0"><img src="{{item.image}}"/></div>
      <div class="item-card-text">
          <p class="p0">{{item.title}}</p>
          <p class="p1">{{item.subtitle}}</p>
          <p class="p2">¥ {{item.price}}</p>
      </div>
      <div class="goods-amount" v-if="local">&#215;1</div>
      <div class="goods-amount" v-else="local">df</div>
</div>
</template>

<script>
  import S from 'service';
  const props = ['item', 'none'];
  export default {
    props: props,
    components: {
    },

    data() {
      return {
        detail: {},
        
      };
    },
    methods: {
      init() {
        
      },
      local(){
        local:!true;
      }
    },
    ready() {
     
    }
  };

</script>
<style lang="less">
@import "../../pages/common.less";
.item-card {
  position: relative;
  width:320px;
  padding: 0px 15px;
  margin: 0 auto;
  border-bottom: none;

  .imgwrap0{
    width:55px; 
    height:55px;
    margin:8px 5px 0 0px;
    text-align:center;
    float: left;
  }
  img{
    width:55px; 
    height:55px; 
  }
  .item-card-text{
    width:150px; 
    height: 65px; 
    float: left;
    .p0{
      text-overflow: ellipsis; 
      overflow: hidden; 
      font-size: 9px; 
      color: #000; 
      line-height:12px;
      margin-top: 6px;
      height:24px;
    }
    .p1{
      font-size:8px; 
      color:#9B9B9B;
      line-height: 16px; 
      text-overflow: ellipsis; 
      overflow: hidden; 
      height: 17px;
      margin-top:0px;
    }
    .p2{
      font-size:12px; 
      color:@com-base;
      margin-top:3px;
    }
  }
  
  .goods-amount{
    right: 0;
    float: right;
        margin-top: 28px;
  }

}
 
  

</style>