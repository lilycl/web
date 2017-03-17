<template>
<!-- 退款详情 -->
<div class="refund-text clear">
    <div class="refund4-top clear">
		<div class="r-t-icon"><img src="../../assets/img/liulan.jpg"/></div>
		<div class="r-t-cont">
			<p>等待商家处理退货申请</p>
		</div>
	</div>
    <p><em>如果商家同意：</em>申请达成并需要您退货给商家</p>
    <p><em>如果商家拒绝：</em>将需要您修改退货申请</p>
    <p><em>如果商家未处理：</em>超过04天23时则申请达成需要您退货</p>
    <span>修改退货申请</span>
    <span>撤销退货申请</span>
    <span>申请客服介入</span>
</div> 
<!-- 退款详情 -->  
<!-- 商家拒绝了您的退货退款申请 -->
<div class="refund-text clear refund2">
    <div class="refund4-top clear">
		<div class="r-t-icon"><img src="../../assets/img/liulan.jpg"/></div>
		<div class="r-t-cont">
			<p>商家拒绝了您的退货退款申请</p>
		</div>
	</div>
    <p><em>拒绝理由：</em>请更改退货退款理由为七天无理由，谢谢～</p>
    <span>修改退货申请</span>
    <span>撤销退货申请</span>
    <span>申请客服介入</span>
</div> 
<!-- 商家拒绝了您的退货退款申请 -->  
<!-- 请退货给商家 -->
<div class="refund-text clear refund3">
	<div class="refund4-top clear">
		<div class="r-t-icon"><img src="../../assets/img/liulan.jpg"/></div>
		<div class="r-t-cont">
			<p>请退货给商家</p>
		</div>
	</div>

    <div class="clear"><div class="r-l"><em>退货时间：</em></div><div class="r-r">剩余04天02时逾期未退货申请将自动关闭</div></div>
		<div class="clear"><div class="r-l"><em>退货地址：</em></div><div class="r-r">北京市昌平区回龙观生命科学园2栋210；100085；小米售后组，400-8689759</div></div>
    <span @click="__gotoPage('refund_logistics')">填写物流单号</span>
    <span>申请客服介入</span>
</div> 
<!-- 请退货给商家 -->  
<!-- 退款关闭 -->
<div class="refund-text clear refund4">
    <div class="refund4-top clear">
			<div class="r-t-icon"><img src="../../assets/img/liulan.jpg"/></div>
			<div class="r-t-cont">
				<p>退款关闭</p>
			</div>
		</div>
    <div class="clear"><div class="r-l"><em>关闭原因：</em></div><div class="r-r">由于您取消退货退款关闭</div></div>
		<div class="clear"><div class="r-l"><em>关闭时间：</em></div><div class="r-r">2012-12-28 13:14</div></div>
</div> 
<!-- 退款关闭 -->  
<!-- 退款成功 -->
<div class="refund-text clear refund5">
    <div class="refund4-top clear">
		<div class="r-t-icon"><img src="../../assets/img/liulan.jpg"/></div>
		<div class="r-t-cont">
			<p>退款成功</p>
		</div>
	</div>
    <div class="clear"><div class="r-l"><em>退款金额：</em></div><div class="r-r" style="color:#d70000;">¥1224.00</div></div>
		<div class="clear"><div class="r-l"><em>关闭时间：</em></div><div class="r-r">2012-12-28 13:14</div></div>
		<span>查看钱款去向</span>
</div> 
<!-- 退款成功 -->  
</template>
<script>
  import S from 'service';
  export default {

    data() {
      return {

      }
   
    },
    methods: {
      init() {

      }
      
  },
    ready() {
      this.init();
    }
  };   

</script> 
<style scoped lang="less">
 @import "../../pages/common.less";
.refund-text{ 
	background: #fff; 
	font-size: 11px; 
	color: #000;
	line-height: 20px;
	padding:15px 15px 10px 15px; 
	border-bottom: 1px solid #E9E9E9;
	margin-top:10px;
	i{
		width: 11px;
		height: 11px;
		border-radius: 50%;
		border: 1px solid @com-base;
		display: inline-block;
		margin-right: 5px;
	}
	span{
		width: 88px;
		height: 28px;
		line-height: 26px;
		border: 1px solid #cbcbcb;
		display: block;
		text-align: center;
		margin-right:9px;
		margin-top: 10px;
		float: left;
		color: #000;
		&:last-child{
			margin-right:0px;
		}
	
	}

	&:active{
		background: #fafafa;
	}
	.r-l{
		float: left;
	}
	.r-r{
		float: right;
		width: 230px;
	}
	div{
		color: #000;
	}
	em{
		color:@com-tip;
	}	
}

.refund2{
	p:nth-child(1){
			color:@com-base;
		}
	i{
		border: 1px solid @com-base;
	}
}

.refund3 {
	span{
			width: 138px;	
		}
	
	p{
		color: #000;
	}	
	
}

.refund5{
	span{
		width: 50%;
		margin-left: 65px;
		border-color:@com-base;
		color: @com-base;
	}
}

p:nth-child(1){
			color:@com-base;
		}
p:nth-child(2){
			margin-top: 10px;
		}		
.refund4-top{
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
    border-bottom:1px solid #E9E9E9; 
    padding-bottom: 15px;
    margin-bottom: 10px;
	.r-t-icon{
		width:28px;
		height:28px;
		border-radius: 50%;
		position: relative;
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
	.r-t-cont{
		margin-left: 8px;
		
		p:nth-child(1){
			color:#000;
			font-size: 11px;
		}
		p:nth-child(2){
			color: #9b9b9b;
			font-size: 8px;
		}
	}

}
</style>