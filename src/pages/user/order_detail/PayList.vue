<template>
<div class="clear statUs-paylist">
    <p>商品金额<i>¥200.00</i></p>
    <p>店铺优惠<i class="paylist-discount">- ¥10.00</i></p>
    <p>运费<i>¥10.00</i></p>
    <p>平台优惠<i class="paylist-discount">- ¥10.00</i></p>
</div>
</template>
<style lang="less">
  @import "../../boy.less";
  @import "../../common.less";
  .statUs-paylist{
	font-size:11px; 
	color: #000; 
	line-height:20px; 
	padding:15px; 
	width: auto;
	background: #fff; 
	margin-top: 10px;
	i{
		float: right;
	}
	.paylist-discount{
		color: @com-base;
	}
}

</style>
<script type="text/javascript"></script>