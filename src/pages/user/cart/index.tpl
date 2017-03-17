<div style="padding-bottom:60px;">
    <topbar title="购物车" 
      :show-left="show>0" 
      fixed 
      :right="right"
      @back="showEdit">
    </topbar>
    <div class="base-add-none" v-if="list.length==0">
      <img src="../../../assets/images/user/no-shopping.png"/>
      <p>购物车是空空的呢 去挑选点什么吧~</p>
    </div>
    <div style="padding-top:10px;">
      <cart-skus 
          v-for="item in list"
          :item.sync="item"
          :edit="edit.show"
          :index="$index"
          :selected="item.parentSelected"
          @check-click="checkClick"
          @check-click-all="checkClickAll"
          @delete="deleteOne"
      >
      </cart-skus>
    </div>
  <div>
    <h2 class="cart-h2" v-if="list[0].invalidUserCart.length > 0">失效商品<span @click="delInvalidGoods">清空失效宝贝</span></h2>
    <div id="exp-goods" v-for="item in list[0].invalidUserCart">
      <h2> {{item.item.vendorName}}<span></span></h2>
      <div class="base-category0">
          <div class="cart-label">失效</div>
          <div class="clear">
              <div class="fl imgwrap0"><img src="{{item.item.image}}"/></div>
              <div class="base-category0-text0 fl">
                  <p class="p0">{{item.item.title}}</p>
                  <p class="p1">{{item.item.subtitle}}</p>
                  <p class="p2">¥ {{item.item.bidPrice}}</p>
              </div>
              <div class="fr goods-amount">&#215;{{item.skuNum}}</div>
          </div>
      </div>
    </div>
  <div v-show="!edit.show && list.length!=0" class="cart-footer" :class="{'cart-footer1': show > 0}">
    <div >
      <div  @click="selectAll">
          <div class="base-point" @click="select"><i v-if="allSelected"></i></div>
          <div class="choose-num">全选</div>
      </div>
      <strong>¥ {{totalPrice}}</strong>
      <a @click="__gotoPage('confirm_order', {id: ''})" :class="{'can-accounts': totalPrice > 0}" class="accounts">结算</a>
    </div>
  </div>
  <div v-show="edit.show" class="cart-footer" :class="{'cart-footer1': show > 0}">
    <div @click="selectAll" >
        <div class="base-point"><i v-if="allSelected"></i></div>
        <div class="choose-num">全选</div>
    </div>
    <a href="javascript:;" class="con-btn wish-list" @click="addWishlist">移到心愿单</a>
    <a @click="delete" href="javascript:;" class="con-btn accounts">删除</a>
  </div>
 </div>
 <mt-popup
    :visible.sync="popup"
    position="middle"
    popup-transition="popup-fade">
  <div class="pop-cnt">
      <p>确认要删除此商品吗？</p>
      <div class="pop-btn">
      <span @click="default">放弃</span>
      <span @click="confirm">确认</span>
      </div>
  </div>
</mt-popup>
</div>

