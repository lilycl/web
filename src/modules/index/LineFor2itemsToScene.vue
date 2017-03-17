<template>
	<div class="scene-ad" @click="__gotoPage('activity')">
	    <img src="../../assets/images/index/run.png"/>
	</div>
	<line-for2items-more></line-for2items-more>
  <div class="item-more" @click="__gotoPage('activity')">
	    <h2>更多 <span>家庭健身装备</span><i></i></h2>
	</div>  
</template>
<script type="text/javascript">
import LineFor2itemsMore from './LineFor2itemsMore';
// import AdBanner from './AdBanner';
const props = {
    items: {
      type: Array
    }
  };

  export default {
    props: props,
    components: { 
        LineFor2itemsMore
        // ,AdBanner
    },
    methods: {
    },
    ready() {
    }
  };
</script>
<style lang="less">
@import "../../pages/common.less";
.scene-ad{
  width:100%;
  height: 90px;
  margin-top:10px;
  img{
    width:100%;
  }
}
.item-more h2{
  i{
    width: 5px;
    height: 8px;
    position: absolute;
    top: 15px;
    margin-left: 4px;
    background:url(../../assets/images/index/go_more.png) no-repeat;
    background-size: cover;
  }
} 

</style>