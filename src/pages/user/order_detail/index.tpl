<topbar title="订单详情" fixed></topbar>
<stat-us></stat-us>
<div class="clear statUs-add">
    <i class="pos"></i>
    <div class="statUs-add-msg">
        <p class="p0"><em style="margin-right: 13px;">收货人: </em>义经<i>13812339877</i></p>
        <p class="p1"><em>收货地址 : </em><span>北京市海淀区上地西路12号打飞碟大楼14栋23楼23-1单元303</span></p>
    </div>
</div>
<div class="clear statUs-add">
    <i class="pos"></i>
    <div class="statUs-add-msg">
        <p class="p0"><em>买家留言</em></p>
        <p class="p1">请迅速发货喔～</p>
    </div>
</div>
<bill></bill>
 
<user-orders></user-orders>
<pay-list></pay-list>
<mt-radio
    align="right"
    title="支付方式"
    :value.sync="value"
    style="background:#fff; padding-top:1px; margin-top:10px;"
    :options="['微信支付','支付宝支付']">
  </mt-radio>
<mt-cell title="支付方式" @click="__gotoPage('')" value="支付宝支付"  style="margin-top:10px;"></mt-cell>  
<div id="order-price">
    <mt-cell title="实付" @click="__gotoPage('')" value=""  style="margin-top:10px;">¥ 2873.00</mt-cell>  
</div>    
<div class="mld-ser">
    <p>24小时客服电话　<a href="tel:400-200-38920">400-200-38920</a></p>
    <p>拨打前请记录您的ID : 2893874</p>
</div>
<pay-footer></pay-footer>


