<template>
  <mt-tabbar v-show="!show">
    <mt-tab-item v-for="value in nav" :id="value.id" @touchstart="gotoPage(value.name,$index)" :class="{ active:index == $index }" >
      <img v-show="index == $index" slot="icon" :src="value.imgSelect">
      <img v-show="index != $index" slot="icon" :src="value.imgDefault"> {{value.id}}
      <div class="message-num" v-if="$index === 2 && messageNum!=0">
        {{messageNum}}
      </div>
    </mt-tab-item>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  import utils from 'utils';
  const props = {
     show:{
        type: Number,
        default: 0
     },
    /**
     * 导航索引
     * @type {Object}
     */
    index: {
      type: Number,
      default: 0
    },
    /**
     * 消息数量
     * @type {Object}
     */
    messageNum:{
      type: Number,
      default: 0
    },

  };
  const events = {
    TAB: 'tab'
  };
  export default {
        name: 'topbar',
        props:props,
        data() {
          return {
            nav: [
              {
                imgDefault:require('../../assets/images/index/defaul_home.png'),
                imgSelect:require('../../assets/images/index/01_01.png'),
                id:'首页',
                name:'index'
              },
              {
                imgDefault:require('../../assets/images/index/default_list.png'),
                imgSelect:require('../../assets/images/index/01_02.png'),
                id:'分类',
                name:'category'
              },
              {
                imgDefault:require('../../assets/images/index/default_shoppingcar.png'),
                imgSelect:require('../../assets/images/index/01_03.png'),
                id:'购物车',
                name:'shopcart'
              },
              {
                imgDefault:require('../../assets/images/index/default_personal.png'),
                imgSelect:require('../../assets/images/index/01_04.png'),
                id:'我的',
                name:'mine'
              }
            ]
          }
        },
        components: {
            [Tabbar.name]: Tabbar,
            [TabItem.name]: TabItem
        },
        methods: {
          gotoPage(id,index) {
            //微信点击的时候保存tab状态以 便重新打开index的时候获取
            window.sessionStorage.setItem('TAB_SHOW',id);
            
            if(this.index != index){
              this.index = index;
              this.$dispatch(events.TAB, {id, index});
            }
          }
        }
    };    
</script>
<style lang="less">
@import "../../pages/boy.less";
  .mint-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: #fff;
    .mint-tab-item {
      position: relative;
      color: #8f8f8f;
      padding: 5px 0;
      i {
        position: absolute;
        display: block;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 26px;
        height: 4px;
        margin: 0 auto;
        background: #fff;
      }
      &.active {
        color: @boy-color;
        i {
          background: #3b3c47;
        }
      }
      &.is-selected {
        background: none!important;
        color: @boy-color;
      }
      .message-num {
        position: absolute;
        padding: 1px 3px;
        background: #de3435;
        border-radius: 10px;
        color: #fff;
        top: 5px;
        right: 30%;
      }
    }
  }
</style>