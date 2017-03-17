<template>
<div class="empty-wrap">
  <div class="img"><img src="../../assets/img/1.png"/></div>
  <p>购物车是空空的呢去挑选点什么吧~</p>
  <!-- <p>客官~您尚无订单呀~</p>
  <p>评价晒单空空的</p>
  <p>心愿单空空的</p>
  <p>尚无浏览记录</p> -->
  <p>返回首页</p>
</div>
</template>

<script>
  import S from 'service';
  const props = [];
  export default {
    props: props,
    components: {
    },

    data() {
      return {
      };
    },
    methods: {
      init() {

      },

    },
    ready() {

    }
  };

</script>
<style scoped>
.empty-wrap{
    position: absolute;
    top: -90px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 80px;
    margin: auto;
    .img{
      width: 90px;
      height: 80px;
        img{
            max-width:100%;
            max-height:100%;
            top:50%;
            left:50%;
            position: absolute;
            -webkit-transform-origin:50% 50%;
            -webkit-transform:translate3d(-50%,-50%,0);
              }
     }
  p{
  font-size:10px;
      margin-top: 20px;
  color: #000;
  text-align: center;
  } 
  p:nth-child(3){
  font-size:9px;
  margin-top: 35px;
  }   
}
</style>