<div class="coupon-bg" id="coupon-header">
<topbar title="优惠券"></topbar>
<div class="base-tab" id="base-coupontab">
    <ul>
        <li @click="select(0)"><a :class="{'current': active === 0}">未使用</a></li>
        <li @click="select(1)"><a :class="{'current': active === 1}">已使用</a></li>
        <li @click="select(2)"><a :class="{'current': active === 2}">已失效</a></li>
    </ul>
</div>
<div class="base-add-none" v-if="list.length==0">
  <img src="../../../assets/images/user/no-coupon.png"/>
  <p>没有一张优惠券</p>
  <a @click="gotoindex">返回首页</a>
</div>
<div class="base-nr">
    <div  v-for="item in list">
        <div class="coupon" v-show="item.flag == active" v-for="i in item.num">
            <div class="coupon-l" :class="{'coupon-l-used': active > 0}">
            <h4>{{item.couponName}}</h4>
            <p>{{item.couponRange}}</p>
            <p style="font-size: 8px;">有效期  {{item.start}} ~ {{item.end}}</p>
            </div>
            <div class="coupon-r  coupon-no " :class="{'coupon-used': active > 0}">
                <li class="coupon-rtext"><i v-show="item.flag == 1" class="used"></i><i v-show="item.flag == 2" class="noused"></i><em>¥</em>{{item.couponAmount}}</li>
            </div>
        </div>   
    </div>
</div>