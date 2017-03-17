<template>
<div class="con-moudle" style="padding-bottom:10px;">
    <div class="hot"><img src="../../assets/images/index/icon_guess.png">猜你喜欢</div>
    <line-for2items-more></line-for2items-more>
</div>
</template> 
<script>
import S from 'service';
import LineFor2itemsMore from 'modules/index/LineFor2itemsMore';
  const props = {
    items: {
      type: Array
    }
  };

  export default {
    props: props,
    components: { LineFor2itemsMore, },
    methods: {
    },
    ready() {
    }
  };    
</script>
<style >
 .hot{
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  border-bottom: 0.5px solid #eee;
  text-indent: 15px;
  background: #fff;
  font-size: 13px;
  img{
    width: 18px;
    vertical-align: middle;
    margin-right: 6px;
  }
 } 
</style>