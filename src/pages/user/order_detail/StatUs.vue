<template>
<!--待发货-->
<div class="statUs-text statUs1">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>已付款  待商家发货</p>
		</div>
	</div>
    <p><i>订单编号 :</i> 2444032</p>
    <p><i>下单时间 :</i> 2016-08-23 20：35</p>
    <p><i>付款时间 :</i> 2016-08-23 20：35</p>
</div>
<!--待发货-->
<!--待付款-->
<div class="statUs-text statUs2">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>已下单  待付款</p>
			<p>剩余付款时间 : <em>36分钟</em></p>
		</div>
	</div>
    <p><i>下单时间 :</i> 2016-08-23 20：35</p>
    <p><i>订单编号 :</i> 2444032</p>
    <div class="statUs-tex-msg">
        <p style="margin-top:10px;">实付 : <i>￥750.00</i></p>
        <span>确认收货</span>
        <span>查看物流</span>
    </div>
</div>
<!--待付款-->
<!--待收货-->
<div class="statUs-text statUs3">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>买家已发货  待收货</p>
		</div>
	</div>
    <p><i>订单编号 :</i> 2444032</p>
    <p><i>下单时间 :</i> 2016-08-23 20：35</p>
    <p><i>付款时间 :</i> 2016-08-23 20：35</p>
    <p><i>发货时间 :</i> 2016-08-24 13：45</p>
</div>
<!--待收货-->
<!-- 交易关闭-->
<div class="statUs-text statUs4">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>交易关闭</p>
		</div>
	</div>
    <p><i>订单编号 :</i> 2444032</p>
    <p><i>下单时间 :</i> 2016-08-23 20：35</p>
    <p><i>付款时间 :</i> 2016-08-23 20：35</p>
    <p><i>发货时间 :</i> 2016-08-24 13：45</p>
    <p><i>成交时间 :</i> 2016-08-24 13：45</p>
</div>
<!-- 交易关闭-->
<!--交易关闭理由-->
<div class="statUs-text statUs5">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>交易关闭</p>
			<p><em>超时未付款／手动取消／商家取消</em></p>
		</div>
	</div>
	<p><i>订单编号 :</i> 2444032</p>
 	<p><i>下单时间 :</i> 2016-08-23 20：35</p>    
</div>
<!--交易关闭理由-->
<!--交易成功-->
<div class="statUs-text statUs6">
	<div class="statUs-tex-saller clear">
		<div class="s-s-icon"><img src="../../../assets/img/liulan.jpg"/></div>
		<div class="s-s-cont">
			<p>交易成功</p>
		</div>
	</div>
	<p><i>订单编号 :</i> 2444032</p>
    <p><i>下单时间 :</i> 2016-08-23 20：35</p>
    <p><i>付款时间 :</i> 2016-08-23 20：35</p>
    <p><i>发货时间 :</i> 2016-08-24 13：45</p>
    <p><i>成交时间 :</i> 2016-08-24 13：45</p>    
</div>
<!--交易成功-->
</template>
<style lang="less">
  @import "../../boy.less";
  @import "../../common.less";
/*订单详情*/
.statUs-text{ 
	background: #fff; 
	font-size:8px; 
	color: #000;
	padding:10px 15px 10px 15px; 
	border-bottom: 1px solid @com-border;
	i{
		color: @com-tip;
	}
	p{
		line-height:15px;
	}
	em{
		color: @com-title;
	}
}


.statUs2{
	padding:14px 15px 0px 15px;
}

.statUs-tex-msg{
	height: 40px; 
	line-height: 40px; 
	border-top: 1px solid @com-border; 
	margin-top: 9px;
}

.statUs-tex-msg p{
	float: left; 
	i{
		font-size: 10px;
		color: @com-base;
	}

}

.statUs-tex-msg span{
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
	float: right;
}

.statUs-tex-saller{
	    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-box-pack: center;
    -o-box-pack: center;
    box-pack: center;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-box-align: center;
    -o-box-align: center;
    box-align: center;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-box;
    display: -o-box;
    display: box;
    width: 100%;
    border-bottom:0.5px solid @com-border; 
    padding-bottom: 15px;
    margin-bottom: 10px;
	.s-s-icon{
		width: 28px;
		height: 28px;
		border-radius: 50%;
		position: relative;
		margin-top: 3px;
		img{
		max-width:100%;
		max-height:100%;
		position:absolute;
		top:50%;
		left:50%;
		-webkit-transform-origin:50% 50%;
		-webkit-transform:translate3d(-50%,-50%,0);
		}
	}
	.s-s-cont{
		margin-left: 8px;
		
		p:nth-child(1){
			color:@com-base;
			font-size: 11px;
		}
		p:nth-child(2){
			color: #9b9b9b;
			font-size: 8px;
		}
	}

}

/*订单详情*/
</style>
<script type="text/javascript">
	
</script>