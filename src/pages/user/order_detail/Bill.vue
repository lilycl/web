<template>
<div class="clear statUs-bill">
    <p>发票信息<em>待开票</em></p>
    <p><i>发票类型：</i>电子发票</p>
    <p><i>发票抬头：</i>单位</p>
    <p><i>单位名称：</i>小数信息科技（北京）有限公司</p>
    <p><i>发票内容：</i>明细</p>
    <p @click="__gotoPage('e-invoice')"><span>查看发票</span></p>
</div>
</template>
<style lang="less">
  @import "../../boy.less";
    @import "../../common.less";
  .statUs-bill{
	font-size:9px; 
	color: #000; 
	line-height: 14px; 
	padding:15px; 
	width: auto;
	background: #fff; 
	margin-top: 10px;
	i{
		color: @com-tip;
	}
	p:nth-child(1){
		margin-bottom: 5px;
	}
		span{
		float: right;
		width:58px; 
		height: 18px; 
		border-radius: 2px; 
		background: #fff; 
		line-height: 15px; 
		text-align: center;
		color: #000; 
		border: 0.5px solid @com-border; 
		font-size: 8px;
		margin-top:10px; 
		margin-left:10px;
		display: block; 
	}
		em{
			float: right;
		}
}
</style>
<script type="text/javascript"></script>