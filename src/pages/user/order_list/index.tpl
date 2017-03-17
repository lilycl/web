<div class="bg-gray">
    <div id="order-list-header">
    <topbar fixed title="我的订单" slot="right"></topbar>
    </div>
    <div class="base-tab" id="base-mylist">
        <ul>
        <li @click="select(0)"><a :class="{'current': active === 0}">全部</a></li>
        <li @click="select(1)"><a :class="{'current': active === 1}">待付款</a></li>
        <li @click="select(2)"><a :class="{'current': active === 2}">待发货</a></li>
        <li @click="select(3)"><a :class="{'current': active === 3}">已发货</a></li>
        <li @click="select(4)"><a :class="{'current': active === 4}" style="margin-right: 0px;">待评价</a></li>
        </ul>   
    </div>
    <div class="base-mylist-content base-nr">
        <user-orders :type="show" :current="active"></user-orders>
    </div>
</div>
