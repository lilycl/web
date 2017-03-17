<template>
<div class="sort-tab">
    <li @click="select(0)"><a :class="{'active': active === 0}">最新</a></li>
    <li @click="select(1)"><a :class="{'active': active === 1}">价格<i></i></a></li>
</div>
<div :style="{display: active === 0 ? 'block' : 'none'}"></div>
<div :style="{display: active === 1 ? 'block' : 'none'}"></div>
</template>

<script>
  const props = {
    items: {
    }
  };

  export default {
    props: props,
    data() {
      return {
        active: 0
      };
    },
    methods: {
    select(active) {
        this.active = active
    }
    },
    ready() {
    }
  };    
</script>
<style lang="less">
  @import "../../pages/boy.less";
.sort-tab{
  height:30px; 
  width: 100%; 
  background: #fff; 
  border-bottom: 0.5px solid #e9e9e9;
  li{
    width: 50%;
    float: left;
    border-right: 1px solid #e9e9e9;
    text-align: center; 
    height: 20px; 
    line-height: 20px; 
    margin-top: 5px;
    position: relative;
    a{color: #000;}
    i{
      width: 8px; 
      height: 12px;
      background: #9b9b9b;
      position: absolute; 
      right: 20px; 
      top:4px;
    }
    &:last-child{border-right: none; }
    /*.active{color: @main-color;}*/
  }
}

</style>