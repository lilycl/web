<template>
    <div class="recommend-img-list clear">
    	<div class="list-l">
            <img src="../../assets/images/index/AD_09.png"/>
        </div>
        <div class="list-r">
            <div class="clear">
                <img src="../../assets/images/index/AD_10.png">
                <img src="../../assets/images/index/AD_11.png">
            </div>  
            <div class="clear">
                <img src="../../assets/images/index/AD_12.png">
                <img src="../../assets/images/index/AD_13.png">
            </div>
        </div> 
    </div>
</template>
<script>
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
.recommend-img-list{
    width: 100%;
    height: 160px;
    margin:10px 0px;
    .list-l{
      width: 50%;
      height: 100%; 
      float: left; 
      img{
        width: 100%;
        height: 100%;
      }
    }
    .list-r{
      width: 50%;
      height: 100%;
      float: left;  
      img{
        width: 50%;
        height: 80px;
        float: left;
      }
    }

}

    
</style>