<template>
<div class="plus-reduce-banner">
  <span class="reduce" :class="{'unclick': this.numberValue <= this.min}" @touchend="reduce"></span>
  <input  
        v-model = "value" 
        class   = "input" 
        @focus  = "obtainFocus"
        @blur   = "loseFocus"
  />
  <span class="plus" :class="{'unclick': this.numberValue >= this.max}" @touchend="plus" ></span>
</div>
</template>

<script>
/**
 * @author wfz
 * 复选框 
 */
import S from 'service';

const props = {
    /**
     * step
     * 每点击＋号或者－号，数值加或者减多少
     */
     step: {
        type: Number,
        default: 1
     },

     /**
     * 数值的单位
     * 例如：kg m 元
     */
     numericalUnit: {
        type: String,
        default: ""
     },

     /**
     * 数值上限（最大值）
     * 
     */

     max: {
        type: Number,
        //default: 10
     },
    
     /**
     * 数值下限（最小值）
     * 
     */
     min: {
        type: Number,
        default: 1
     },

     /**
     * 默认数值
     * 
     */
     default: {
        type: String,
        default: '1'
     },
      index: {
        type: Number,
        default: 0
     },
     
    
}

const events = {

    /**
     * 值改变后的通知
     * */
    VALUE_CHANGE: 'value-change',

    /**
     * 值溢出后的通知
     * */
    OVERFLOW: 'overflow',

    /**
     * 值不可靠的通知
     * */
    INVALID: 'invalid'
}

export default {

    props: props,

    data() {

        return {
            value: this.min + this.numericalUnit,
            numberValue: this.default
        }

    },

    ready() {

        this.value = this.default
        this.$dispatch(events.VALUE_CHANGE, this.value,this.index)
    },

    methods: {
        // 加法逻辑
        plus () {

            this.numberValue = this.value.replace(/[^0-9]/ig,"")/1 + this.step

            if( this.numberValue > this.max ){
                this.numberValue = this.max + this.numericalUnit
                return this.$dispatch(events.OVERFLOW)
            }

            this.value = this.numberValue  + this.numericalUnit
            this.$dispatch( events.VALUE_CHANGE , this.value,this.index )
        },

        // 减法逻辑
        reduce() {

            this.numberValue = this.value.replace(/[^0-9]/ig,"")/1 - this.step

            if (this.numberValue < this.min) {

                this.numberValue = this.min + this.numericalUnit
                return this.$dispatch(events.OVERFLOW)

            }

            this.value = this.numberValue + this.numericalUnit
            this.$dispatch (events.VALUE_CHANGE, this.value,this.index)

        },

        obtainFocus () {
            this.value = Number(this.value.replace(/[^0-9]/ig,""))
        },

        // 失去焦点事件
        loseFocus () {

            // 正则表达式验证输入是否合法，只允许输入数字
            if (!new RegExp('^[1-9][0-9]*$','g').test(this.value,this.index) ) {

                const testFloat = this.value.match(/^(\d+).\d+$/)

                // 为小数时进行四舍五入
                if (testFloat) {
                    this.value = (Math.round(this.value) === 0 ? 1 : Math.round(this.value)) + this.numericalUnit
                    this.$dispatch( events.VALUE_CHANGE , this.value ,this.index)
                } else {
                    this.value = this.min + this.numericalUnit
                }

                return this.$dispatch(events.INVALID)

            }

            // 当数值超出范围时
            if (this.value > this.max || this.value < this.min) {

                this.value > this.max?
                    this.value = this.min + this.numericalUnit : 
                    this.value = this.min + this.numericalUnit

                this.$dispatch( events.VALUE_CHANGE , this.value ,this.index)
                return this.$dispatch(events.OVERFLOW)
            }

            this.numberValue = this.value
            this.value       = this.value + this.numericalUnit
            this.$dispatch(events.VALUE_CHANGE, this.value,this.index)

        }
        
    }

}
</script>
<style lang="less" scoped>
.plus-reduce-banner {
  font-size: 0; 
  height: 25px;
  
  .reduce {
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url(../../assets/images/user/down_default.png) center center no-repeat; 
    background-size:cover;
    float: left;
    background-color: #f2f2f2;
    
    &.unclick {
      background: url(../../assets/images/user/down_empty.png) center center no-repeat; 
      background-size:cover;
    }
  }

  .plus {
    display: inline-block;
    width: 25px;
    height: 25px;
    float: right;
    background: url(../../assets/images/user/up_default.png) center center no-repeat; 
    background-size:cover;
    
    
    &.unclick {
      background: url(../../assets/images/user/up_empty.png) center center no-repeat; 
      background-size:cover;
    }
  }

  .input {
    display: inline-block;
    box-sizing: border-box;
    width: 66px;
    height: 25px;
    border: 0.5px solid #9b9b9b;
    text-align: center;
    color: #000;
    font-size: 14px;
    -webkit-appearance:none;
    border-radius: 0;
    background-color: #fff
  }
}
</style>