<template>

<div class="ad" @click="__gotoPage('activity')" style="margin-top:10px;">
    <img src="../../assets/images/index/adsmall.png"/>
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
.ad{
  position: relative;
  height: 90px;
  width:100%;
  img{
    width:100%;
    top:50%;
    left:50%;
    position: absolute;
    -webkit-transform-origin:50% 50%;
    -webkit-transform:translate3d(-50%,-50%,0);
  }
}
</style>