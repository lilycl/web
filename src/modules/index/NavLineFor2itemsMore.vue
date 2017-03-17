<template>
    <div class="con-moudle" style="margin-top:10px;">
    <div class="index-cat-nav clear">
        <i class="fl"><img src="../../assets/images/index/icon_shoe.png"/></i>
        <span class="fl">鞋</span>
        <ul class="fr clear">
            <li><span></span>跑步鞋</li>
            <li><span></span>休闲鞋/板鞋 </li>
            <li><span></span>运动登山鞋</li>
        </ul>
    </div>
    <line-for2items-more></line-for2items-more>
    <div class="item-more" @click="__gotoPage('list')">
        <h2>更多 <span>鞋</span><i></i></h2>
    </div> 
</div>
</template> 
<script>
import S from 'service';
import LineFor2itemsMore from './LineFor2itemsMore';
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
<style lang="less">
.index-cat-nav{
  padding: 0px 15px;
}



</style>