<div class="det-container bg-gray" >

<div id="item-detail-cnt">
    <span class="back" @click="back"></span>
    <span class="home"></span>
    <div class="base-xl">
        <span class="more"></span>
    </div>
    <span class="message"><i>1</i></span>
    <div class="detail-banner">
        <mt-swipe :auto="4000" >
          <mt-swipe-item v-for="img in detail.scrollimgs">
            <img :src="img"/>
          </mt-swipe-item>
            <!-- <mt-swipe-item ><img :src="img"/></mt-swipe-item> -->
         
        </mt-swipe>
    </div>
    <div class="item-detailinfo">
        <div class="info">
            <p class="name">{{detail.title}}</p>
            <p class="simpledes">{{detail.subtitle}}</p>
            <div class="price">
                <em>￥</em><em>{{detail.bidPrice}}</em>
                <span class="detail-label"><i></i></span>
            </div>
            <!-- <p class="tips">{{detail.count}} 后 恢复日常价 <i>¥ {{detail.delPrice}}</i></p> -->
            <div class="base-goods-up clear " id="policy">
                <span class="fl span1">· 7天无理由退换货</span>
                <span class="fl span3">· 正品保证</span>
                <span class="fr span2">· 满168元包邮</span>
            </div>
        </div>
    </div>
    <div id="get-amout">
        <mt-cell  v-if="skuTitle ==''" title="规格数量选择" is-link @click="showPopup(true)">
        </mt-cell>
        <mt-cell  v-if="skuTitle!=''" :title="skuTitle" is-link @click="showPopup(true)">
        </mt-cell>
    </div>    
    <div id="get-coupon" v-show="detail.coupon">
        <mt-cell title="领取优惠券" is-link @click="showPopupCoupon(true)">
            {{detail.stock}}<i></span>
        </mt-cell>
    </div>
</div>    
    <div id="comment-all">
    <mt-cell title="评价(20)" is-link @click="__gotoPage('comment_all')" style="margin-top: 10px">
      查看全部评价
    </mt-cell> 
    </div> 
    <comment-list></comment-list>

    <div class="brand clear" @click="__gotoPage('vendor',{id:detail.vendor.vendorId})"><i class="base-go"></i>
        <div class=" fl brand-head"><img src="{{detail.vendor.vendorLogo}}"/></div>
        <div class="brand-text fl">
            <li class="brand-name">{{detail.vendor.vendorName}}<i>品牌直营</i></li>
            <li class="brand-des">{{detail.vendor.vendorDesc}}</li>
        </div>
    </div>
    <!-- <p class="up-det"><i class="base-up"></i>向上查看商品属性</p> -->
    <div class="des-content">
        <p class="des-title">商品详情</p>
        <div class="base-width">
            {{{detail.itemDesc}}}
        </div>
    </div>
    <p class="des-title" style="border-bottom:0.5px solid #f5f5f5;">相关商品</p>
    <line-for2items-more></line-for2items-more>
    <div class="mld-ser">
        <p>24小时客服电话　<a href="tel:400-200-38920">400-200-38920</a></p>
        <p>拨打前请记录您的ID : 2893874</p>
    </div>
    <div style="height: 44px;"></div>
</div>

<bottom-cart title="放入购物车" :items="detail" @cart-add="add" @cart-buy="buy" ></bottom-cart>
</div>
<mt-popup
        :visible.sync="popupVisible"
        position="bottom"
        popup-transition="popup-fade"
    >
    <div class="cartwrap">
        <div class="cartpay" v-for="sku in itemsku">
            <div class="cart-brand clear" v-for="l in sku.value">
                <div class="cart-b-img fl"><img src="{{l.itemSku.skuImage}}"/></div>
                <div class="cart-b-text fr">
                    <p class="p0">{{detail.title}}</p>
                    <p class="price">
                        <span>限时特价</span><em>￥</em><em>{{detail.bidPrice}}</em>
                        <i>剩余  {{detail.stockType}}</i>
                    </p>
                </div>
            </div>
            <div class="base-width">
                <select-params @select="selectSku" :sku-list="itemsku">
                </select-params>
                <div class="cart-color">
                    <p class="color-title">数量</p>
                    <div class="amount">
                        <adjust-value @value-change="valueChange" ></adjust-value>
                    </div>
                </div>
            </div>
        </div>
    </div>
</mt-popup>
<div id="mt-popup">
<mt-popup
    :visible.sync="popupCouponVisible"
    position="bottom"
    popup-transition="popup-fade"
>
<div class="detail-coupon">
    <p class="d-c-title">店铺优惠券</p>
    <div class="coupon" v-for="coupon in shopcoupons">
        <div class="coupon-l coupon-l-border">
            <h4>{{coupon.couponName}}元</h4>
            <p v-if="">{{coupon.couponRange}}</p>
            <p style="font-size: 8px;">有效期  {{coupon.start}} ~ {{coupon.end}}</p>
        </div>
        <div>
            <div class="coupon-r" v-show="!edit.show" @click="receivecoupon($index)">
                <li class="coupon-now">立即领取</li>
            </div>
            <div class="coupon-r  coupon-no" v-show="edit.show">
                <li class="coupon-now">已领取</li>
            </div>
        </div>
    </div> 
</div> 
</mt-popup>
</div>
