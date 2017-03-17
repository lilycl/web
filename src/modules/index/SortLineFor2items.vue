<template>
<div class="sort-tab">
  <li @click="select(0)"><a :class="{'active': active === 0}">最新</a></li>
  <li @click="select(1)"><a :class="{'active': active === 1}">价格<i></i></a></li>
</div>
<div :style="{display: active === 0 ? 'block' : 'none'}">
   <div class="two-layout-goods">
        <ul class="clear" >
            <li v-for="i in 4">
                <div class="li-img"><img src="../../assets/images/index/good_shoe.png"/></div>
                <p class="p0">健身&肌肉训练</p>
                <p class="p1">¥ 1928</p>
            </li>
        </ul>
    </div>
</div>
<div :style="{display: active === 1 ? 'block' : 'none'}">
  
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
        active: 0

      };
    },
    methods: {
      init() {
      },
      select(active) {
        this.active = active
      }

    },
    ready() {
     
    }
  };

</script>
<style scoped>


</style>