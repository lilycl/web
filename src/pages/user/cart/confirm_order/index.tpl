<div class="bg-gray">
<div id="sex-header"><topbar title="确认订单"></topbar></div>
<div class="base-add0 clear base-mld-add" id="order-address">
    <i class="pos"></i>
    <div class="base-add0-l fl">
        <p class="p0"><em>收货人 :</em> 义经<i>13812339877</i></p>
        <p class="p1"><em>收货地址 :</em> 北京市海淀区上地西路12号打飞碟大楼14栋23楼23-1单元303</p>
    </div>
    <span class="fr"></span>
</div>
<cart-orders></cart-orders>
<div id="confirm-order-coupon">
<mt-cell title="平台优惠券" @click="showPopupCoupon(true)" is-link  value="" icon="more" style="margin-top:10px;"></mt-cell>
</div>
<div id="detail-ccount">
  <div class="freight clear">
      <h4 class="fl">商品金额</h4>
      <p class="fr">¥200.00</p> 
  </div>
  <div class="freight clear">
      <h4 class="fl">店铺优惠</h4>
      <p class="fr warning">- ¥10.00</p> 
  </div>
  <div class="freight clear">
      <h4 class="fl">运费</h4>
      <p class="fr">+ ¥10.00</p> 
  </div>
  <div class="freight clear">
      <h4 class="fl">平台优惠</h4>
      <p class="fr warning">- ¥10.00</p> 
  </div>
</div>
<div class="pay-ways">
  <div class="freight clear">
      <h4 class="fl">支付方式</h4>
  </div> 
  <div class="freight clear" @click="select">
      <h4 class="fl"><img src="../../../../assets/images/user/weixin.png"/>微信支付</h4>
      <p class="fr check-box" v-if="!show"></p>
      <img class="fr choose" src="../../../../assets/images/user/choose.png" v-if="show"/> 
  </div>
  <div class="freight clear" @click="select1">
      <h4 class="fl"><img src="../../../../assets/images/user/zhifubao.png"/>支付宝支付</h4>
      <p class="fr check-box" v-if="show"></p>
      <img class="fr choose" src="../../../../assets/images/user/choose.png" v-if="!show"/> 
  </div>
</div>
<!-- <mt-radio
  align="right"
  title="支付方式"
  :value.sync="value"
  style="background:#fff; padding-top:1px; margin-top:10px;"
  :options="['微信支付','支付宝支付']">
</mt-radio> -->
<div style="height:90px;"></div>
<pay-footer style="position:fixed;"></pay-footer>
<mt-popup
      :visible.sync="popupCouponVisible"
      position="bottom"
      popup-transition="popup-fade"
  >
  <ul class="coupon-info">
      <li>不使用优惠券</li>
      <li class="current">消费 满100元 减 10元</li>
      <li>消费 满1000元 减 100元</li>

  </ul>
  <!-- <div class="detail-coupon">
       <p class="d-c-title">店铺优惠券</p> 
      <div class="coupon">
          <div class="coupon-l coupon-l-border">
          <h4>满100元减5元</h4>
          <p>全场通用</p>
          <p style="font-size: 8px;">有效期  2016年12月1日 ~ 2017年1月1日</p>
        </div>
        <div class="coupon-r  coupon-no">
            <li class="coupon-now">立即领取</li>
        </div>
      </div>  
   </div> --> 
     
  </mt-popup>
</div>