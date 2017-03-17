<template>
    <div class="two-layout-goods">
        <ul class="clear" >
            <li >
                <div class="li-img"><img src="../../assets/images/index/1.png"/></div>
                <p class="p0" style="margin-top:0;">健身&运动</p>
                <p class="p1">¥ 666</p>
            </li>
            <li >
                <div class="li-img"><img src="../../assets/images/index/1.png"/></div>
                <p class="p0" style="margin-top:0;">健身&运动</p>
                <p class="p1">¥ 666</p>
            </li>
            <li >
                <div class="li-img"><img src="../../assets/images/index/1.png"/></div>
                <p class="p0" style="margin-top:0;">健身&运动</p>
                <p class="p1">¥ 666</p>
            </li>
            <li >
                <div class="li-img"><img src="../../assets/images/index/1.png"/></div>
                <p class="p0" style="margin-top:0;">健身&运动</p>
                <p class="p1">¥ 666</p>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">

  const props = ['items'];

  export default {
    props: props,
    methods: {
    },
    ready() {
    }
  };
</script>
<style lang="less">
@import "../../pages/common.less";

.two-layout-goods{
    width: 100%; 
    background: #fff;
    li{
        .li1(50%;auto;0;2px;4px);
       .p0{
            font-size: 11px;
       }
    }
    li:nth-child(even){
        border-right: none;
    }
   
}

</style>