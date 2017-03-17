
<template>
  <div
    :style="{height: cHeight}" 
    class="xs-comp-listc"
  >
    <slot></slot>
  </div>
</template>

<script>

const props = {
  
  // 顶部头所占高度
  topHeight: {
    type: Number,
    default: 45
  },

  // 沉浸式头部高度
  immersed: {
    type: Number,
    default: 0
  },

  // 底部bar所占高度
  bottomHeight: {
    type: Number,
    default: 0
  }
}

const broadcast = {
  // 订阅重新刷新当前高度事件
  REFRESH: 'lc-refresh'
}

/**
 * 列表容器
 * 所有的列表都用此组件包含
 */
export default {
  props: props,

  broadcast: broadcast,

  data() {
    return {
      // 容器高度
      cHeight: '0'
    }
  },

  ready() {
    this.getHeight();
    this.$on(broadcast.REFRESH, this.refreshHeight);
  },

  methods: {
    // 首次进入获取高度
    getHeight() {
      this.cHeight = (window.innerHeight - this.topHeight - this.immersed - this.bottomHeight) + 'px';
    },

    // 刷新高度
    refreshHeight(topHeight, immersed, bottomHeight) {
      topHeight = topHeight || this.topHeight
      immersed = immersed || this.topHeight
      bottomHeight = bottomHeight || this.topHeight

      this.cHeight = (window.innerHeight - topHeight - immersed - bottomHeight) + 'px';
    }
  }
};
</script>
<style scoped>

@component-namespace xs-comp {
  @component listc {
    overflow: auto;
    -webkit-overflow-scrolling: touch;

    .mint-loadmore {
      min-height: 100%;
    }
  }
}

</style>