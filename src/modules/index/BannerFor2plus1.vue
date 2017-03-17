<template>
	<div class="panel-img-list clear">
      <div class="list-l">
        <img src="../../assets/images/index/AD_01.png" @click="__gotoPage('item_detail', {id: 522644383208})"/>
        <img src="../../assets/images/index/AD_02.png" @click="__gotoPage('item_detail')"/>
      </div>
      <div class="list-r">
          <img src="../../assets/images/index/AD_03.png" />
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
<style>
.panel-img-list{
  .list-l {
    width: 50%;
    float: left;
    img{
      width: 100%;
      height: 65px;
    }
  }

  .list-r {
    width: 50%;
    float: left;
    height: 130px;
    img{
      width: 100%;
      height: 130px;
    }
  }
}

</style>