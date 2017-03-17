<template>
  <div class="base-category" v-show="!edit" style="margin-top:10px;" id="cart-border">
    <div class="cart-store-name" >
      <div @click="catSelect" class="cart-point">
        <i v-if="selected"></i>
      </div>  
      <h2> {{item.vendorName}}<span></span></h2>
    </div>
    <mt-cell-swipe
      v-ref:carts
      v-for="goods in item.userCart" 
      :right="[{
        content: '删除',
        style: { background: '#d70000', color: '#fff',lineHeight: '75px',},
        handler: () => {this.delete(goods.cartId,goods)}
      }]"
      :offset-right=44
    >
      <div class="cart-category0" @click="__gotoPage('item_detail', {id: goods.itemId})">
        <div class="cart-point" @click.stop="select($index)"><i v-if="goods.selected"></i></div>
        <div class="clear">
          <div class="fl imgwrap0"><img src="{{goods.item.image}}" /></div>
          <div class="cart-category0-text0 fl">
            <p class="p0">{{goods.item.title}}</p>
            <p class="p1">{{goods.item.subtitle}}</p>
            <p class="p2">￥{{goods.item.bidPrice}}<em>限时直降：¥ 5.00</em> </p>
          </div>
          <div class="fr goods-amount">&#215;{{goods.skuNum}}</div>
        </div>
      </div>
    </mt-cell-swipe>
    <div class="packet-info">
        <p>再消费 60元 包邮</p>
        <span>去凑单 ></span>
    </div>
  </div>
  </div>
  <div class="base-category" v-show="edit" style="margin-top:10px;">
      <div  class="cart-store-name" >
        <div @click="catSelect" class="cart-point">
          <i v-if="selected"></i>
        </div>  
        <h2> {{item.vendorName}}</h2>
      </div>
      <div class="cart-category0" v-for="goods in item.userCart" style="background:#fff;"  id="cart-edit">
        <div class="cart-point" @click="select($index)"><i v-if="goods.selected"></i></div>
        <div class="clear wrap" @click="__gotoPage('item_detail', {id: goods.itemId})">
          <div class="fl imgwrap0"><img src="{{goods.item.image}}"/></div>
          <div class="category-detail fr">
            <p @click.stop="showPopup(true,$index)" class="p">
              <span>{{goods.item.itemSku.skuName}}</span>
              <img src="../../assets/img/down.png">
            </p>
            <div class="amount" @click.stop="">
              <adjust-value :index="$index" :default="goods.skuNum.toString()" :max="goods.item.itemSku.skuStock" @overflow="" @value-change="changeNum"></adjust-value>
            </div>
          </div>
        </div>
        <mt-popup :visible.sync="popupVisible" position="bottom" popup-transition="popup-fade">
          <div class="cartwrap">
            <div class="cartpay" style="bottom:0">
              <i class="close" @click="showPopup(false)"></i>
              <div class="cart-brand clear">
                <div class="cart-b-img fl"><img src="{{item.userCart[active].item.image}}" /></div>
                <div class="cart-b-text fr">
                  <p class="p0">{{item.userCart[active].item.title}}</p>
                  <p class="price">
                    <span>限时特价</span><em>￥</em><em>{{item.userCart[active].item.bidPrice}}</em>
                    <i>剩余 {{item.userCart[active].item.itemSku.skuStock}} 件</i>
                  </p>
                </div>
              </div>
              <div class="base-width">
                  <div class="cart-color">
                      <p class="color-title">颜色</p>
                      <ul class="clear">
                          <li  @click="select($index)" v-for="sku in goods.item.skuList">
                              <a :class="{'current': active === $index}">{{sku.skuName}}</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <a  class="confirm-btn">确定</a>
            </div>
          </div>
        </mt-popup>
      </div>
  </div>
</template>

<script>
  // 商品面板
	import S from 'service';
  import AdjustValue from './AdjustValue';
  import { Popup, CellSwipe, Cell } from 'mint-ui';
  
  const props = ['item', 'edit', 'bg', 'selected', 'index']

  const events = {
    CHECK_CLICK: 'check-click',
    CHECK_CLICK_ALL: 'check-click-all',
    DELETE: 'delete'
  };

  export default {

    components: { 
      AdjustValue , 
      [Popup.name]: Popup, [CellSwipe.name]: CellSwipe, [Cell.name]: Cell
    },

    props: props,

    data() {
      return{
        popupVisible: false,
        skulist:[],
        active:-1,
      }
    },

    methods: {
      select(childIndex) {
        console.log(this.refs)
        this.$dispatch(events.CHECK_CLICK, this.index, childIndex);
      },

      catSelect() {
        this.$dispatch(events.CHECK_CLICK_ALL, this.index);
      },

      changeNum(num,index) {
       this.item.userCart[index].skuNum=num
      },

      showPopup(show,index){
        this.popupVisible = show;
        this.active=index;
        S.item.cartsku({itemId:'522644383208'}).then(ret => {
            this.skulist = ret.data;
            console.log(this.skulist)
        });
      },
      delete(id,goods) {
        this.$dispatch(events.DELETE, id,goods);
      }

    },
    ready() {
    }
  };   

</script>

<style lang="less">
@import "../../pages/common.less";
#cart-border{
  .mint-cell:before{
    color:@com-border;
  }
  .mint-cell:after{
    color:@com-border;
  }
}
.base-category{
  margin-top: 10px;
  .mint-cell-value{
    color: #FD5E12;
  }
  .mint-cell-allow-right::after{
    border: 0.5px solid  #eee;
    border-bottom-width: 0;
    border-left-width: 0;

  }
  .mint-cell-text{
    font-size: 10px;
    color: #000;
  }
 
  .mint-cell::after{
    color: #eee;
  }
  h2{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 34px;
    font-size: 11px;
    background: #fff;
  }
  .packet-info{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    font-size: 10px;
    position: relative;
    p{
      width: 50%;
      text-indent: 15px;
    }
    span{
      position: absolute;
      right: 15px;
      top:0px;
      color: #FD5E12;
    }
  }
}
.cart-category0 {
  position: relative;
  .imgwrap0{
    width: 56px;
    height: 56px;
    margin-top: 10px;
    position: relative;
    left: -10px;
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
  .goods-amount{
    color: #000;
    top:30px;
    right: 0px;
    position: relative;
    font-size: 11px;
    font-family: @com-numtype;
  }
  .amount{
    margin-top:22px;
    }
 

  }
 .cart-point{
  width: 16px; 
  height: 16px; 
  border-radius: 50%; 
  border:1px solid @com-border;
  position: absolute; 
  left: -34px; 
  top: 32px;
}

.cart-point i{
  width:10px; 
  height:10px;  
  border-radius: 50%; 
  background: @com-base; 
  position: absolute;
  left:2px;
  top:2px;
}

.cart-pointall{
  left:10px; 
  top: 50%; 
  margin-top: -6px;
}
.cart-store-name {
   position:relative;
   h2{
    span{
      display: inline-block;
      position: relative;
      top:1px;
      width: 6px;
      height: 10px;
      margin-left: 8px;
      background: url(../../assets/images/item/go_next_more.png) no-repeat;
      background-size: contain;
    }
   }
  .cart-point{
    position: absolute;
    left: 13px; 
    top: 12px;
    z-index:5;
  }
}
.cart-category0-text0{
  width:190px; 
  height: 65px; 
  margin:10px 0px 0px 0px;

   .p0{
    width:176px;
    text-overflow: ellipsis; 
    overflow: hidden; 
    font-size: 11px; 
    color: #000; 
    line-height:12px;
  }
   .p1{
    font-size:10px; 
    color:#9B9B9B;
    line-height: 12px; 
    margin-top:2px; 
  }
   .p2{
    font-size:12px; 
    color:@com-base;
    margin-top: 5px;
    font-family: @com-numtype;
    em{
      font-size:8px;
      margin-left: 12px;
      color:#FD5E12;
      border:0.5px solid #FD5E12;
      padding: 1px 2px;
      position: relative;
      top: -2px;
      border-radius: 2px;
      font-family: @com-numtype;
    }
  }

}
#cart-edit{
  .wrap{
    height: 75px;
    border-bottom: 0.5px solid #eee; 
  }
  .imgwrap0{
    left: 40px;
  }

  .cart-point{
    left: 15px; 
    top: 32px;
  }
 .p{
  height: 20px;
  margin-top: 10px;
  span{
    text-align: right;
    margin-right: 15px;
    right: 14px;
  }

}

}
.close{
    background: url(../../assets/images/item/close_choose_date.png) no-repeat;
    background-size: contain;
    right: 15px;
    position: absolute;
    top: -40px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
}

 
</style>