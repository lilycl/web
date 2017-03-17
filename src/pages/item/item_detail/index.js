import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import { Cell, Popup, SwipeItem, Swipe,Toast } from 'mint-ui';
import AdjustValue from 'modules/user/AdjustValue';
import CommentList from 'modules/item/CommentList';
import BottomCart from 'modules/user/BottomCart'
import LineFor2itemsMore from 'modules/index/LineFor2itemsMore'
import SelectParams from './Select'
import './style.less';

module.exports = entry({
	template: require('./index.tpl'),
	components: { 
		BottomCart, CommentList,LineFor2itemsMore, SelectParams,
		AdjustValue,
		[Cell.name]: Cell,
		[Popup.name]: Popup,
		[SwipeItem.name]:SwipeItem, [Swipe.name]:Swipe 
	},

	data() {
		return {
			detail: {},
			commentList: [],
			shopcoupons:[],
			itemsku:[],
			popupVisible: false,
			popupCouponVisible:false,
			skuTitle:'',
			active:'',
			couponactive:0,
			cart: {
				itemId: '',
				skuId: null,
				num: 1
			},
			edit:{
				show:false
			},
			edit0:{
				show0:false
			}
		};
	},

	methods: {
		init() {
			S.order.getDetail({itemId: this.__getPageData().id}).then(ret => {
				this.detail = ret.data;
				this.detail.scrollimgs = [
					this.detail.image
				].concat(this.detail.subImages.split(','))
				this.cart.itemId = ret.data.itemId;
			})
		},
		add() {
			this.popupVisible = true;
			const _cart = Object.assign({}, this.cart)
			console.log(_cart.skuId)
		},
		buy(a) {
			this.popupVisible = true;
			console.log(a);
		},
		valueChange(value) {
			this.cart.num = value
		},
		selectSku(sku,index) {
			this.skuTitle = '已选择：' + sku.skuName;
			this.cart.skuId = sku.skuId
		},
		showPopup(show) {
			this.popupVisible = show;
			S.item.itemsku({itemId: this.__getPageData().id,blCid:this.detail.blCid}).then(ret => {
				this.itemsku = ret.data;
				console.log(this.itemsku[0].value)
				if(ret.status==200){
	                Toast("成功");
	            }else{
	            	Toast("错误");
	            }
			})
		},
		showPopupCoupon(show) {
			this.popupCouponVisible = show;
			S.item.shopcoupon({vendorId:this.detail.vendorId}).then(ret => {
				this.shopcoupons = ret.data;
			})
		},
		receivecoupon(index) { 
			S.item.receivecoupon({couponId:this.shopcoupons[index].couponId}).then(ret => {
				if(ret.status==200){
	              Toast("领取成功");
	              this.init();
	              this.couponactive = $index;
	            }else if(ret.status==300){
	              Toast("不能领取再多了，贪心会长胖");
	            }else{
	            	Toast("错误");
	            }
			})
      	},
		// showEdit0() {  
		// 	Toast("领取成功");  
  //         this.edit0.show0 = !this.edit0.show0;
  //     	},
      	back(){
      		history.go(-1)
      	}  
	},
	ready() {
		this.init();
	}
	
});