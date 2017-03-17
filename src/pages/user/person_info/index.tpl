<div class="personal-header">
    <a @click="__gotoPage('user_info')"><img src="{{list.user.image}}"/></a>
    <a @click="__gotoPage('login')" class="login">登录/注册  您的账户</a>
    <span @click="__gotoPage('message_list')"><i>1</i></span>
</div>
<div class="my">
    <div id="whole-order">
    <mt-cell title="我的订单" @click="__gotoPage('order_list')" is-link  value="全部订单" icon="more">
    </mt-cell>
    </div>
    <div class="order-act clear">
        <a @click="__gotoPage('order_list',{active:1})" >
            <span class="lm"><img src="../../../assets/images/user/top_01.png"/><i v-if="list.userAccount.unpayOrders > 0">{{list.userAccount.unpayOrders}}</i></span>
            <p>待付款</p>
        </a>
        <a @click="__gotoPage('order_list',{active:2})" >
            <span class="lm"><img src="../../../assets/images/user/top_02.png"/><i v-if="list.userAccount.unsendOrders > 0">{{list.userAccount.unsendOrders}}</i></span>
            <p>待发货</p>
        </a>
        <a @click="__gotoPage('order_list',{active:3})" >
            <span class="lm"><img src="../../../assets/images/user/top_03.png"/><i v-if="list.userAccount.unrecvOrders > 0">{{list.userAccount.unrecvOrders}}</i></span>
            <p>已发货</p>
        </a>
        <a @click="__gotoPage('order_list',{active:4})" >
            <span class="lm"><img src="../../../assets/images/user/top_04.png"/><i v-if="list.userAccount.uncommentOrders > 0">{{list.userAccount.uncommentOrders}}</i></span>
            <p>待评价</p>
        </a>
        <a @click="__gotoPage('refund_aftersale',{active:5})" >
            <span class="lm"><img src="../../../assets/images/user/top_05.png"/><i v-if="list.userAccount.refundOrders > 0">{{list.userAccount.refundOrders}}</i></span>
            <p>退款售后</p>
        </a>
    </div>
    <mt-cell style="margin-top:10px;" title="优惠券" @click="__gotoPage('coupon')" is-link  value="4张" icon="more" style="margin-top:10px;">
        {{list.userAccount.couponNum}}张
        <img slot="icon" src="../../../assets/images/user/list_youhui.png" width="15" height="15">
    </mt-cell>
    <mt-cell title="我的评价晒单" @click="__gotoPage('comment_list')" is-link   icon="more" style="margin-top:10px;">
        {{list.userAccount.commentNum}}
        <img slot="icon" src="../../../assets/images/user/list_shaidan.png" width="15" height="15">
    </mt-cell>
    <mt-cell title="我的心愿单" @click="__gotoPage('wish_list')" is-link  value="65" icon="more">
        {{list.userAccount.wishlistNum}}
        <img slot="icon" src="../../../assets/images/user/list_like.png" width="15" height="15">
    </mt-cell>
    <mt-cell title="浏览记录" @click="__gotoPage('browse_record')" is-link  value="65" icon="more">
        {{list.userAccount.browseRecords}}
        <img slot="icon" src="../../../assets/images/user/list_liulan.png" width="15" height="15">
    </mt-cell>
    
    <mt-cell style="margin-top:10px;" title="地址管理" @click="__gotoPage('address_list')" is-link  icon="more">
        <img slot="icon" src="../../../assets/images/user/list_add.png" width="15" height="15">
    </mt-cell>
    <mt-cell title="帮助中心" @click="__gotoPage('help')" is-link   icon="more">
        <img slot="icon" src="../../../assets/images/user/list_puestion.png" width="15" height="15">
    </mt-cell>
    <mt-cell style="margin-top:10px;" title="意见反馈" @click="__gotoPage('feedback')" is-link   icon="more">
        <img slot="icon" src="../../../assets/images/user/list_letter.png" width="15" height="15">
    </mt-cell>
    <mt-cell title="关于我们" @click="__gotoPage('about')" is-link   icon="more">
        <img slot="icon" src="../../../assets/images/user/list_about.png" width="15" height="15">
    </mt-cell>
    <div class="service-phone">
        <p>24小时客服电话  <a href="tel:400-200-38920">400-200-38920</a></p>
        <p>拨打前请记录您的ID : <span>2893874</span></p>
    </div>
    <a class="my-btn">退出登录</a>
</div>

