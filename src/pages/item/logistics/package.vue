<template>
	<div class="base-goods-down clear">
        <div class="base-goods-dimg fl">
            <img src="../../../assets/img/1.png"/>
        </div>
        <div class="base-goods-dtext fl">
            <a href="javascript:;"><p class="p0">斯凯奇秋冬新款时间反毛皮短靴舒适保秋冬新款时间反毛皮短靴舒适保暖</p></a>
            <p class="p1">颜色 : 黑色/彩色；尺码 : 39</p>
        </div>
    </div>
</template>
<style type="text/css">

</style>
<script type="text/javascript">
import S from 'service';
	export default{
        props:['h'],
        data() {
            return {

            };
        },
        methods: {
            init() {
            }
        },

}  
</script>
<style>
.base-goods-down{
    width: 100%;
    background: #fff;
    position: relative; 
    border-bottom:0.5px solid #E9E9E9; 
    padding: 10px 0;
    &:active{
        background: #FAFAFA;
    };
    &:last-child{
        border-bottom:none;
    };
}
.base-goods-dimg{
    width: 55px; 
    height: 55px; 
    text-align: center; 
    line-height:55px;
    margin-left: 10px;
    img{
        max-height: 55px; 
        max-width: 55px;    
        vertical-align: middle; 
    }
}

.base-goods-dtext{
    font-size: 10px; 
    margin-left: 10px; 
    color:#9B9B9B;
    .p0{
        font-size:9px; 
        color:#000;  
        width:190px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .p1{
        margin-top:7px; 
        color: #9B9B9B; 
        font-size: 8px;
    }
}


</style>