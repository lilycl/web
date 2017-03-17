<template>
  <div class="mint-loadmore">
    <div 
      class="mint-loadmore-content" 
      :class="{ 'is-dropped': topDropped || bottomDropped}" 
      :style="{ 'transform': 'translate3d(0, ' + translate + 'px, 0)' }" 
      v-el:loadmore-content
    >
      <slot name="top">
        <div class="mint-loadmore-top" v-if="topMethod">
          <spinner 
            v-if="topStatus === 'loading'" 
            class="mint-loadmore-spinner" 
            :size="20" 
            type="fading-circle">
          </spinner>
          <span class="mint-loadmore-text">{{ topText }}</span>
        </div>
      </slot>
      <slot></slot>
      <slot name="bottom">
        <div class="mint-loadmore-bottom" v-if="bottomMethod">
          <spinner 
            v-if="bottomStatus === 'loading'" 
            class="mint-loadmore-spinner" 
            :size="20" 
            type="fading-circle">
          </spinner>
          <span class="mint-loadmore-text">{{ bottomText }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<style>
  @component-namespace mint {
    @component loadmore {
      overflow: hidden;
      min-height:100%;
      @descendent content {
        @when dropped {
          transition: .2s;
        }
      }

      @descendent bottom {
        text-align: center;
        height: 70px;
        line-height: 40px;
        background: #f0f0f0;
      }

      @descendent top {
        text-align: center;
        height: 70px;
        line-height: 105px;
        background: #f0f0f0;
      }

      @descendent top {
        margin-top: -70px;
      }

      @descendent bottom {
        margin-bottom: -70px;
      }

      @descendent spinner {
        display: inline-block;
        margin-right: 5px;
        vertical-align: middle;
      }

      @descendent text {
        vertical-align: middle;
      }
    }
  }
</style>

<script>
  import spinner from './spinner/spinner/fading-circle.vue';
  export default {
    name: 'mt-loadmore',
    components: {
      'spinner': spinner
    },

    props: {
      /**
       * 拖动的阻尼系数 越大越难拖动
       */
      damping: {
        type: Number,
        default: 5.4
      },
      maxDistance: {
        type: Number,
        default: 70
      },
      autoFill: {
        type: Boolean,
        default: true
      },
      topPullText: {
        type: String,
        default: '下拉刷新'
      },
      topDropText: {
        type: String,
        default: '释放更新'
      },
      topLoadingText: {
        type: String,
        default: '加载中...'
      },
      topDistance: {
        type: Number,
        default: 50
      },
      topMethod: {
        type: Function
      },
      topStatus: {
        type: String,
        default: ''
      },
      bottomPullText: {
        type: String,
        default: '上拉刷新'
      },
      bottomDropText: {
        type: String,
        default: '释放更新'
      },
      bottomLoadingText: {
        type: String,
        default: '加载中...'
      },
      bottomDistance: {
        type: Number,
        default: 70
      },
      bottomMethod: {
        type: Function
      },
      bottomStatus: {
        type: String,
        default: ''
      },
      bottomAllLoaded: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        uuid: null, // 当前scroll对象唯一标识 用于区分刷新对象
        translate: 0, // 当前容器刷新滚动的距离
        scrollEventTarget: null, // 当前附属的滚动容器 默认为window
        containerFilled: false, // 当前容器是否填满内容
        topText: '',
        topDropped: false,
        bottomText: '',
        bottomDropped: false,
        bottomReached: false,
        direction: '',
        startY: 0,  // 触摸点的Y坐标
        startScrollTop: 0,
        currentY: 0
      };
    },

    watch: {
      topStatus(val) {
        switch (val) {
          case 'pull':
            this.topText = this.topPullText;
            break;
          case 'drop':
            this.topText = this.topDropText;
            break;
          case 'loading':
            this.topText = this.topLoadingText;
            break;
        }
      },

      bottomStatus(val) {
        switch (val) {
          case 'pull':
            this.bottomText = this.bottomPullText;
            break;
          case 'drop':
            this.bottomText = this.bottomDropText;
            break;
          case 'loading':
            this.bottomText = this.bottomLoadingText;
            break;
        }
      }
    },

    events: {
      onTopLoaded(id) {
        if (id === this.uuid) {
          this.translate = 0;
          setTimeout(() => {
            this.topStatus = 'pull';
          }, 200);
        }
      },

      onBottomLoaded(id) {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
        if (id === this.uuid) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              document.body.scrollTop += 50;
            } else {
              this.scrollEventTarget.scrollTop += 50;
            }
            this.translate = 0;
          });
        }
        if (!this.bottomAllLoaded && !this.containerFilled) {
          this.fillContainer();
        }
      }
    },

    methods: {
      /**
       * 获取当前scroll的主体对象
       * 返回父节点有scroll能力的节点 否则返回window
       */
      getScrollEventTarget(element) {
        let currentNode = element;
        while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
          let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
          if (overflowY === 'scroll' || overflowY === 'auto') {
            return currentNode;
          }
          currentNode = currentNode.parentNode;
        }
        return window;
      },

      getScrollTop(element) {
        if (element === window) {
          return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
        } else {
          return element.scrollTop;
        }
      },

      bindTouchEvents() {
        this.$el.addEventListener('touchstart', this.handleTouchStart);
        this.$el.addEventListener('touchmove', this.handleTouchMove);
        this.$el.addEventListener('touchend', this.handleTouchEnd);
      },

      init() {
        this.topStatus = 'pull';
        this.bottomStatus = 'pull';
        this.topText = this.topPullText;
        this.scrollEventTarget = this.getScrollEventTarget(this.$el);
        if (typeof this.bottomMethod === 'function') {
          this.fillContainer();
          this.bindTouchEvents();
        }
        if (typeof this.topMethod === 'function') {
          this.bindTouchEvents();
        }
      },

      fillContainer() {
        if (this.autoFill) {
          this.$nextTick(() => {
            if (this.scrollEventTarget === window) {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= document.documentElement.getBoundingClientRect().bottom;
            } else {
              this.containerFilled = this.$el.getBoundingClientRect().bottom >= this.scrollEventTarget.getBoundingClientRect().bottom;
            }
            if (!this.containerFilled) {
              this.bottomStatus = 'loading';
              this.bottomMethod(this.uuid);
            }
          });
        }
      },

      checkBottomReached() {
        if (this.scrollEventTarget === window) {
          return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
        } else {
          return this.$el.getBoundingClientRect().bottom <= this.scrollEventTarget.getBoundingClientRect().bottom + 1;
        }
      },

      // 滑动开始前初始位置记录
      handleTouchStart(event) {
        this.startY = event.touches[0].clientY;
        this.startScrollTop = this.getScrollTop(this.scrollEventTarget);
        this.bottomReached = false;
        if (this.topStatus !== 'loading') {
          this.topStatus = 'pull';
          this.topDropped = false;
        }
        if (this.bottomStatus !== 'loading') {
          this.bottomStatus = 'pull';
          this.bottomDropped = false;
        }
      },

      // 滑动动画处理
      handleTouchMove(event) {

        // 起始触摸点 在当前div之外时直接return
        if (
          this.startY < this.$el.getBoundingClientRect().top && this.startY > this.$el.getBoundingClientRect().bottom
        ) {
          return;
        }
        this.currentY = event.touches[0].clientY;
        // 滑动距离
        let distance = (this.currentY - this.startY) / this.damping;
        this.direction = distance > 0 ? 'down' : 'up';

        // 判断scrolltop === 0时 阻止浏览器滑动事件
        if (typeof this.topMethod === 'function' && this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.topStatus !== 'loading') {
          event.preventDefault();
          event.stopPropagation();
          this.translate = distance <= this.maxDistance ? distance - this.startScrollTop : this.translate;
          if (this.translate < 0) {
            this.translate = 0;
          }
          this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
        }

        if (this.direction === 'up') {
          this.bottomReached = this.bottomReached || this.checkBottomReached();
        }

        if (typeof this.bottomMethod === 'function' && this.direction === 'up' && this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
          event.preventDefault();
          event.stopPropagation();
          this.translate = Math.abs(distance) <= this.maxDistance ? this.getScrollTop(this.scrollEventTarget) - this.startScrollTop + distance : this.translate;
          if (this.translate > 0) {
            this.translate = 0;
          }
          this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
        }
      },

      // 滑动结束后回调处理
      handleTouchEnd() {
        if (this.direction === 'down' && this.getScrollTop(this.scrollEventTarget) === 0 && this.translate > 0) {
          this.topDropped = true;
          if (this.topStatus === 'drop') {
            this.translate = '50';
            this.topStatus = 'loading';
            this.topMethod(this.uuid);
          } else {
            this.translate = '0';
            this.topStatus = 'pull';
          }
        }
        if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
          this.bottomDropped = true;
          this.bottomReached = false;
          if (this.bottomStatus === 'drop') {
            this.translate = '-50';
            this.bottomStatus = 'loading';
            this.bottomMethod(this.uuid);
          } else {
            this.translate = '0';
            this.bottomStatus = 'pull';
          }
        }
        this.direction = '';
      }
    },

    ready() {
      this.uuid = Math.random().toString(36).substring(3, 8);
      this.init();
    }
  };
</script>