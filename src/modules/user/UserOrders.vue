<template>
	<div class="ml-content" @click="__gotoPage('order_detail')">
		<div class="my-order-up clear ml-cup">
			<span class="fl span1 "><div class="ml-cup-logo"><img src="../../assets/images/index/1.png"/></div>小米旗舰店</span>
			<span class="fr span2" v-if="type">等待买家付款   <em>1小时50分钟</em></span>
			<!--<span class="fr span2">退款中</span>-->
		</div>
		<div class="my-order-down clear ml-cdown">
			<div class="my-order-down-img fl">
				<img src="../../assets/images/index/1.png"/>
			</div>
			<div class="my-order-down-text fl">
				<p class="p0">斯凯奇秋冬新款时间斯凯奇秋冬新款时间斯凯奇秋冬新款时间斯凯奇秋冬新款时间</p>
				<p class="p1">颜色 :黑色；尺码 : 39</p>
				<p class="p2">七天退换</p>
			</div>
			<div class="ml-c-right fr">
				<span>￥666.00</span></br>
				<span class="span1">￥777</span></br>
				<span class="span2 fr">X 1</span>
			</div>
		</div>
		<div class="my-order-up clear ml-p-list" v-if="type">
			<span class="fr span2">共 2 件商品 合计：<em>￥750.00</em> （含运费￥10）</span>
		</div>
		<div class="my-order-up clear ml-p-list" v-if="!type">
			<span class="fr span2"> 交易金额 : ¥ 750.00   &nbsp;&nbsp;  退款金额：<i>￥750.00</i></span>
		</div>

		<div class="ml-btn" v-if="type">
			<span v-if="current === 1">付款</span>
			<span v-if="current === 4" @click="__gotoPage('comment'">评价</span>
			<span v-if="current === 4">再次购买</span>
			<span v-if="current === 1">取消订单</span>
			<span v-if="current === 3">查看物流</span>
			<span v-if="current === 4">确认收货</span>
			<span v-if="parseInt(current) === 1 || 2 || 3 ||4">联系客服</span>
		</div>
		<div class="ml-btn" v-if="!type">
			<span>相似商品</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	import S from 'service';

  const events = {
  };

  export default {
  	components: { },

		props: ['type',"current"],
   
    data() {
      return {
        orderList: [],        
      };
    },

    methods: {
      init() {
      	S.myOrder.orderList({type: this.type}).then(ret => {
			this.orderList = ret.data;
		})
      },
      
  },
    ready() {
      this.init();
    
    }
  }; 	
</script>
<style lang="less">
.my-order-down{
	width: 100%;
	margin: 0 auto;
	position: relative; 
	border-bottom:0.5px solid #E9E9E9; 
	padding: 10px 15px 10px 0px;

}

.my-order-down:active{
	background: #FAFAFA;
}

.my-order-down:last-child{
	border-bottom:none;
}

.my-order-down-img{
width: 55px; 
height: 55px; 
text-align: center; 
line-height:55px;
	img{
	max-height: 55px; 
	max-width: 55px;    
	vertical-align: middle; 
	}
}

.my-order-down-text{
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

.my-order-up{
width:300px;  
border-bottom:0.5px solid #E9E9E9; 
margin: 0 auto; 
line-height: 28px;
	span{
	font-size:8px;
	}
	.span1{
	color:#000;
	}
	.span2{ 
	color: #000;
	}
	.span3{ 
	color: #000;
	margin-left: 65px;
	}
}

.base-mylist ul{
width:300px; 
margin: 0 auto; 
padding: 0px;
}

.base-tab a{
margin: 0px 5px; 
padding: 0px 10px;
}

.ml-content{
width: 100%; 
margin-top: 10px;
background: #fff;
}

.ml-cup{
position: relative; 
text-indent: 20px;
	.span1{
	font-size: 9px;
	}
	.span2{
	font-size:8px; 
	color:#9b9b9b;
		i{
		color: #000;
		}
	}
}

.ml-cdown:last-child{
border-bottom: 1px solid #E9E9E9;
}

.ml-cup-logo{
    position: relative;
    width: 13px;
    height: 13px;
    float: left;
    left: 0px;
    top: 6px;
    margin-right: 5px;	
}
.ml-cup-logo img
{
	max-width:100%;
			max-height:100%;
			position:absolute;
			top:50%;
			left:50%;
			-webkit-transform-origin:50% 50%;
			-webkit-transform:translate3d(-50%,-50%,0);
}
.ml-cdown .p0{
width: 167px;
}

.ml-cdown .p2{
font-size: 7px; 
color: #e60000; 
border: 0.5px solid #e60000; 
width: 34px;
text-align: center; 
margin-top: 5px;
}

.ml-c-right{
font-size: 9px; 
color: #000;
	.span1{
	color: #9b9b9b; 
	text-decoration: line-through;
	}
	.span2{
	font-size: 8px;
	color: #000; 
	margin-top: 6px;

	}
}

.ml-p-list i{
font-weight: bold;
font-size: 10px;/*
color: #ff3f00;*/
}

.ml-btn{
height: 40px;
padding-right: 15px;
	span{
	width:58px; 
	height: 18px; 
	border-radius: 2px; 
	background: #fff; 
	line-height: 18px; 
	text-align: center;
	color: #000; 
	border: 0.5px solid #E9E9E9; 
	font-size: 8px;
	margin-top:10px; 
	margin-left:10px;
	display: block; 
	float: right;
	}
}

.ml-btn span:active{
background:#FAFAFA;
}
</style>