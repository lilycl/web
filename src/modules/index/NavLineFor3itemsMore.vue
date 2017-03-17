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
            <line-for3items-more></line-for3items-more>
            <div class="item-more" @click="__gotoPage('list')">
                <h2>更多 <span>鞋</span><i></i></h2>
            </div>        
    </div>
</template>

<script>
import LineFor3itemsMore from './LineFor3itemsMore';
  const props = {
    items: {
      type: Array
    }
  };

  export default {
    props: props,
    components: { 
        LineFor3itemsMore,
    },
    methods: {
    },
    ready() {
    }
  };    
</script>
<style lang="less">
@import "../../pages/boy.less";

.index-cat-nav{
    height: 33px;
    line-height: 32px;
    background: #FFF;
    border: 0.5px solid #eee;
    padding: 0px 15px;
    font-size:13px;
    i{
       width: 18px;
       height: 10px; 
       position: relative;
       top:12px;
       margin-right: 6px;
       img{
          width: 100%;
       }
    }
    li{
        float:left;
        font-size:10px;
        padding:0 8px;
        position:relative;
        span{
            width:2px;
            height:2px;
            background:#000;
            position:absolute;
            left:0px;
            top:16px;
            border-radius:50%;
           
        }
      &:first-child span{width:0;height:0;}  
    }
}

</style>