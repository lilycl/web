<template>
	
<div v-for="l in list" class="ml-content user-card ">
	<item-card :item.sync="{'title': l.title, 'subtitle': l.subtitle, 'image': l.image, 'price':l.bidPrice}" ></item-card>
	<p class="c-m-p" style="margin-top: 10px;">{{l.cmtContent}}</p>
	<p class="c-m-p" style="color: #9B9B9B;font-size: 8px;">{{l.created}}</p>
	<div class="c-m-p">
		<img src="{{l.cmtImages}}"/><img src="{{l.cmtImages}}"/>
	</div>
	<p class="c-m-answer">平台回复：{{l.replyMsg}}</p>
	</div>

</template>
<script>
  import S from 'service';
   import ItemCard from '../../../modules/common/ItemCard'
    const props = {
    /**
     * 评论列表
     * @type {Object}
     */
    list: {
      type: Array,
      default: []
    }
  };
  export default {
  	  components: { 
    ItemCard
    },
  	props: props,
    data() {
      return {
      	detail: {}
      }
   
    },
    methods: {
      gotoComment(name) {
    		this.__gotoPage('comment', {name: name})
    	}   
  },
    ready() {
	 
    }
  };   

</script> 
<style lang="less">
@import '../../common.less';
.user-card {
	position: relative;
	width:90%!important;
	padding-bottom: 10px!important;
	border-bottom: 0.5px solid @com-border;
	&:last-child{
		border-bottom: none;
	}

	.imgwrap0{
		width:55px; 
		height:55px;
		margin:10px 0 0 0px;
		text-align:center;
		float: left;
	}
	img{
		width:55px; 
		height:55px; 
	}
	.user-card-text0{
		width:150px; 
		height: 65px; 
		margin:10px 0px 0px 10px;
	}
	.p0{
		width:100%;
		text-overflow: ellipsis; 
		overflow: hidden; 
		font-size: 9px; 
		color: #000; 
		line-height:10px;
	}
	.p1{
		font-size:8px; 
		color:#9B9B9B;
		line-height: 16px; 
		margin-top: 10px;
		i{
			margin-right: 5px;
		}
	}
	.p2{
		font-size:12px; 
		color:#FF5C00;
		margin-top: 10px;
		em{
			font-size:10px;
			color:#9B9B9B;
			margin-left: 12px;
			text-decoration:line-through
		} 
	}

}
.ml-content {
	margin-top: 0px;
	width: 290px;
		margin: 0 auto;
	.user-card{
		background: #fff;
		.imgwrap0{
			margin-left: 5px;
		}
	}
	.base-width{
		border-bottom: none;
	}
	.user-card .goods-amount{
		right: 0;
	}
	.user-card-go{
		right: 16px;
	}
}
.c-m-p{
	
	img{
		margin:10px 10px 10px 0px;
	}

}
.c-m-answer{
	width: 100%;
	background: #efefef;
	font-size: 9px;
	color: #000;
	padding: 10px;
	line-height: 15px;
}


</style>