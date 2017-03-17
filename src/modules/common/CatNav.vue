<template>
    <div style="background: white">
	<div class="modl-catnav">
    <ul :style="{width: innerWidth + 'px'}"  class="clear">
      <li @click="select($index)" >
        <a :class="{'current': active === $index}">运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
        <a>运动</a>
      </li>
    </ul>
	</div>
    </div>
</template>

<script>
    const props = {
        items: {
            type: Array,
            default: []
        }
    };
    const events = {
        SELECT: 'select',
    };

    export default {
        props: props,
        data() {

            return {
                innerWidth: 600,
                active: 0,
            }
        },
        methods: {
            select(index) {
                this.active = index;
                this.$dispatch(events.SELECT, index);
            },

        },
        ready() {
            this.innerWidth = 320 + this.items.length * 40;

        }
    };
</script>

<style lang="less">
    @import "../../pages/common.less";
    @import "../../pages/boy.less";
    .modl-catnav {
        width: 88%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        ul {
            height: 40px;
            line-height: 40px;
            padding: 0px;
            background: #fff;
            overflow: hidden;
            li {
                
                height: 100%;
                border-bottom: 1px solid #eee;
                a {
                    float: left;
                    margin-left: 16px;
                    margin-right: 10px;
                    display: block;
                    height: 40px;
                    color: @com-subtitle;
                    padding: 0 1px;
                    /* &:active{
            background:#fff;
          };*/
                }
                .current {
                    border-bottom: 3px solid @boy-color;
                    color: @boy-color;
                }
            }
            &:after {
                content: '';
                display: block;
                clear: both;
            }
        }
    }
</style>