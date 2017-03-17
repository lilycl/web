<template>
  <div class="two-layout-goods" id="cart-merge-mod">
      <ul class="clear" >
          <li v-for="i in 4">
              <div class="li-img"><img src="../../../../assets/img/1.png"/></div>
              <p class="p0">健身&肌肉训练</p>
              <p class="p1">¥ 1928</p>
              <i></i>
          </li>
      </ul>
  </div>
</template>
<script type="text/javascript">
const props = {
    items: {
      type: Array
    }
  };

  export default {
    props: props,
    methods: {
    },
    ready() {
    }
  };
</script>
<style lang="less">
@import "../../../../pages/common.less";
.two-layout-goods{
    width: 100%; 
    background: #fff;
    li{        
        .li1(160px;auto;22px;22px;24px)      
    }
    li:nth-child(even){
        border-right: none;
    }  
}
#cart-merge-mod{
  li{
    position: relative;
  }
  .p0{
    font-size: 11px;
  }
  .p1{
    font-size: 10px;
  }
  p{
    text-align: left;
    padding: 0px 15px;
  }
  i{
    position: absolute;
    width: 15px;
    height: 15px;
    right: 15px;
    bottom: 16px;
    background:url(../../../../assets/img/more.png);
    background-size: contain;
  }
}
</style>