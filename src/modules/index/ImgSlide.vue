<template>
<div class="page-index-banner" >
	<mt-swipe :auto="4000">
	  <mt-swipe-item><img src="../../assets/images/index/01.png"/></mt-swipe-item>
	 <!--  <mt-swipe-item><img src="../../assets/images/index/02.png"/></mt-swipe-item> -->
	</mt-swipe>
</div>
</template>

<script>

  import S from 'service';
  import { SwipeItem,Swipe } from 'mint-ui';

  import SortTab from '../common/SortTab';
  import LineFor2itemsMore from './LineFor2itemsMore';
  const props = ['item', 'none'];
  export default {
    props: props,
    components: {
      SortTab,LineFor2itemsMore,
      [SwipeItem.name]:SwipeItem, [Swipe.name]:Swipe 
    },

    data() {
      return {
        detail: {}

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
.page-index-banner{
	width: 100%; 
	height:142px; 
	background: #fff; 
	text-align: center; 
	img{
		width:100%;
	}
}
</style>