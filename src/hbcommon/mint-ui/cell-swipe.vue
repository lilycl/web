<template>
  <x-cell
    v-clickoutside:touchstart="swipeMove()"
    @click="swipeMove()"
    @touchstart="startDrag"
    @touchmove="onDrag"
    @touchend="endDrag"
    class="mint-cell-swipe"
    :title="title"
    :icon="icon"
    :label="label"
    :is-link="isLink"
    v-ref:cell
    :value="value">
    <div
      slot="right"
      class="mint-cell-swipe-buttongroup"
      v-el:right>
      <a
        class="mint-cell-swipe-button"
        v-for="btn in right"
        :style="btn.style"
        @click="btn.handler && btn.handler(), swipeMove()"
        v-html="btn.content"></a>
    </div>
    <div
      slot="left"
      class="mint-cell-swipe-buttongroup"
      v-el:left>
      <a
        class="mint-cell-swipe-button"
        v-for="btn in left"
        :style="btn.style"
        @click="btn.handler && btn.handler(), swipeMove()"
        v-html="btn.content"></a>
    </div>
    <slot></slot>
    <span
      v-if="_slotContents.title"
      slot="title">
      <slot name="title"></slot>
    </span>
    <span
      v-if="_slotContents.icon"
      slot="icon">
      <slot name="icon"></slot>
    </span>
  </x-cell>
</template>

<script>
    import {
        once
    } from 'wind-dom/src/event';
    import XCell from './cell';
    import Clickoutside from 'vue-clickoutside';
    /**
     * mt-cell-swipe
     * @desc 类似 iOS 滑动 Cell 的效果
     * @module components/cell-swipe
     *
     * @example
     * <mt-cell-swipe
     *   :left=[
     *     {
     *       content: 'text',
     *       style: {color: 'white', backgroundColor: 'red'},
     *       handler(e) => console.log(123)
     *     }
     *   ]
     *   :right=[{ content: 'allowed HTML' }]>
     *   swipe me
     * </mt-cell-swipe>
     */
    export default {
        name: 'mt-cell-swipe',

        components: {
            XCell
        },

        directives: {
            Clickoutside
        },

        props: {
            left: Array,
            right: Array,
            icon: String,
            title: String,
            label: String,
            isLink: Boolean,
            value: {},
            offsetRight: Number
        },

        data() {
            return {
                start: {
                    x: 0,
                    y: 0
                }
            };
        },

        ready() {
            this.$on('resetPositon', this.swipeMove.bind(this, 0))
            this.resetPositon()
        },

        methods: {
            resetPositon() {
                this.wrap = this.$refs.cell.$el.querySelector('.mint-cell-wrapper');
                this.leftElm = this.$els.left;
                this.rightElm = this.$els.right;
                this.leftWrapElm = this.leftElm.parentNode;
                this.rightWrapElm = this.rightElm.parentNode;
                this.leftWidth = this.leftElm.getBoundingClientRect().width;
                this.rightWidth = this.rightElm.getBoundingClientRect().width;
                if (this.offsetRight && !this.rightWidth) {
                    this.rightWidth = this.offsetRight
                }

                this.leftDefaultTransform = this.translate3d(-this.leftWidth - 1);
                this.rightDefaultTransform = this.translate3d(this.rightWidth);

                this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
                this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
            },

            translate3d(offset) {
                return `translate3d(${offset}px, 0, 0)`;
            },

            swipeMove(offset = 0) {
                this.wrap.style.webkitTransform = this.translate3d(offset);
                this.rightWrapElm.style.webkitTransform = this.translate3d(this.rightWidth + offset);
                this.leftWrapElm.style.webkitTransform = this.translate3d(-this.leftWidth + offset);
                this.swiping = true;
            },

            swipeLeaveTransition(direction) {
                setTimeout(() => {
                    this.swipeLeave = true;

                    // left
                    if (direction > 0 && -this.offsetLeft > this.rightWidth * 0.4) {
                        this.swipeMove(-this.rightWidth);
                        this.swiping = false;
                        this.opened = true;
                        return;
                        // right
                    } else if (direction < 0 && this.offsetLeft > this.leftWidth * 0.4) {
                        this.swipeMove(this.leftWidth);
                        this.swiping = false;
                        this.opened = true;
                        return;
                    }

                    this.swipeMove(0);
                    once(this.wrap, 'webkitTransitionEnd', _ => {
                        this.wrap.style.webkitTransform = '';
                        this.rightWrapElm.style.webkitTransform = this.rightDefaultTransform;
                        this.leftWrapElm.style.webkitTransform = this.leftDefaultTransform;
                        this.swipeLeave = false;
                        this.swiping = false;
                    });
                }, 0);
            },

            startDrag(evt) {
                evt = evt.changedTouches ? evt.changedTouches[0] : evt;
                this.dragging = true;
                this.start.x = evt.pageX;
                this.start.y = evt.pageY;
            },

            onDrag(evt) {
                if (this.opened) {
                    !this.swiping && this.swipeMove(0);
                    this.opened = false;
                    return;
                }
                if (!this.dragging) return;
                let swiping;
                const e = evt.changedTouches ? evt.changedTouches[0] : evt;
                const offsetTop = e.pageY - this.start.y;
                const offsetLeft = this.offsetLeft = e.pageX - this.start.x;

                if ((offsetLeft < 0 && -offsetLeft > this.rightWidth) ||
                    (offsetLeft > 0 && offsetLeft > this.leftWidth) ||
                    (offsetLeft > 0 && !this.leftWidth) ||
                    (offsetLeft < 0 && !this.rightWidth)) {
                    return;
                }

                const y = Math.abs(offsetTop);
                const x = Math.abs(offsetLeft);

                swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
                if (!swiping) return;
                evt.preventDefault();

                this.swipeMove(offsetLeft);
            },

            endDrag() {
                if (!this.swiping) return;
                this.swipeLeaveTransition(this.offsetLeft > 0 ? -1 : 1);
            }
        }
    };
</script>

<style lang="css">
    @import "./style/var.css";
    @component-namespace mint {
        @component cell-swipe {
            @descendent buttongroup {
                height: 100%;
            }
            @descendent button {
                height: 100%;
                display: inline-block;
                padding: 0 10px;
                line-height: 73px;
            }
            .mint-cell-wrapper,
            .mint-cell-left,
            .mint-cell-right {
                transition: transform 150ms ease-in-out;
            }
        }
    }
</style>