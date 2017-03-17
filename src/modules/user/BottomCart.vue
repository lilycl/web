<template>
	<div class="base-bottom item-bottom clear">
    <div class="bottom-left fl">
        <span @click="showEdit">
          <img v-show="items.wish!=0 " src="../../assets/images/item/favourite_on.png" />
          <img v-show="items.wish==0" src="../../assets/images/item/favourite.png" />
        </span>
        <span @click="__gotoPage('index',{active:2})" class="span0"><img src="../../assets/images/item/shoppingcar.png"/><i>1</i></span>
    </div>
    <div class="bottom-right fr">
        <span class="span0 buy" @click="buy">立即购买</span>
        <span  class="span1 " @click="add">{{title}}</span>
    </div>
	</div>

</template>    

<script>
import S from 'service';
import {Toast } from 'mint-ui';
  
  const props = {
    items:{
      type: Object,
      default: '',
    },
    /**
     * 导航索引
     * @type {Object}
     */
    title: {
      type: String,
      default: '放入购物车'
    }
  };

  const events = {
  	BUY: 'cart-buy',
  	ADD: 'cart-add'
  };

  export default {

    props: props,
    data() {
        return {
          edit: {
            show: false
          },
        };
      },
    methods: {
			buy() {
				this.$dispatch(events.BUY);
        console.log(this.items.wish)
			},
      add() {
				this.$dispatch(events.ADD);
      },
      showEdit() {

          if(this.items.wish==1){
          
            S.user.delwishList({itemId:this.items.itemId}).then(ret => {
              
                if(ret.status==200){
                    Toast("取消成功");
                    this.items.wish=0;
                }else{
                    Toast("取消失败");
                }
            })

          }else{
            
            S.user.postwishList({itemId:this.items.itemId}).then(ret => {
              
              if(ret.status==200){
                  Toast("添加成功");
                  this.items.wish=1;
              }else{
                  Toast("添加成功");
              }
           })
        }
         
      }
    },
    ready() {}
  };    
</script>

<style lang="less">
</style>