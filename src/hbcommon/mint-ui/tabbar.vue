<template>
  <div class="mint-tabbar" :class="{
      'is-fixed': fixed
    }">
    <slot></slot>
  </div>
</template>

<script>
/**
 * mt-tabbar
 * @module components/tabbar
 * @desc 底部 tab，依赖 tab-item
 * @param {boolean} [fixed=false] - 固定底部
 * @param {*} selected - 返回 item component 传入的 id
 *
 * @example
 * <mt-tabbar :selected.sync="selected">
 *   <mt-tab-item id="订单">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-tabbar>
 *
 * <mt-tabbar :selected.sync="selected" fixed>
 *   <mt-tab-item :id="['传入数组', '也是可以的']">
 *     <img slot="icon" src="http://placehold.it/100x100">
 *     <span slot="label">订单</span>
 *   </mt-tab-item>
 * </mt-tabbar>
 */
export default {
  name: 'mt-tabbar',

  props: {
    fixed: Boolean,
    selected: {}
  }
};
</script>

<style lang="css">
  @import "./style/var.css";
  @import "./style/border.css";

  @component-namespace mint {
    @component tabbar {
      @mixin border-top $color-grey;
      background-color: $tabbar-background-color;
      display: flex;
      position: absolute * 0 0 0;
      text-align: center;

      @when fixed {
        position: fixed * 0 0 0;
        z-index: $z-index-normal;
      }

      > .mint-tab-item.is-selected {
        background-color: $tabbar-tab-item-selected-background-color;
        color: $tabbar-tab-item-selected-color;
      }
    }
  }
</style>
