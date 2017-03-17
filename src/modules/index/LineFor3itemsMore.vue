<template>
   <div class="item-list">
          <ul class="clear">
              <li v-for="i in 6">
                  <div class="li-img"><img src="../../assets/images/index/good_shoe.png"/></div>
                  <p class="p0">健身&肌肉训练</p>
                  <p class="p1">¥ 1928.00</p>
              </li>
          </ul>
  </div> 
</template>
<script>
    import S from 'service';

    const props = {
        items: {
            type: Array
        }
    };

    export default {
        props: props,
        methods: {},
        ready() {}
    };
</script>
<style lang="less">
    @import "../../pages/common.less";
    .item-list {
        width: 100%;
        background: #fff;
        ul {
            width: 100%;
            li {
                .li1(33%;auto;0;8px;16px;)
            }
            li:nth-child(3n+3) {
                border-right: none
            }
        }
    }
    /*.ad{
 
  img{ 
      max-width:100%;
      max-height:100%;
      top:50%;
      left:50%;
      -webkit-transform-origin:50% 50%;
      -webkit-transform:translate3d(-50%,-50%,0);
 }
}
     */
</style>