<div class="bg-gray" id="message-detail">
    <topbar title="订单消息" 
    :right="right">
    </topbar>
    <div class="m-d-card">
        <div class="m-d-c-top">
            订单已签收<em>2017-2-15</em>
        </div>
        <div class="m-d-c-bottom clear">
            <img src="../../../../assets/images/index/01_01.png"/>
            <div class="bottom-text">
                <p>日常进行时，工作生活两不耽误日常进行时工作生…日常进行时，工作生活两不耽误日常进行时工作生…</p>
                <p><i>申通快递</i>    运单编号：152099891001</p>
            </div>
        </div>
    </div>
    <div class="m-d-card" @click="__gotoPage('message_detail_content')">
        <div class="m-d-c-top">
            优惠红包等你拿
        </div>
        <div class="m-d-c-bottom">
            <p>日常进行时，工作生活两不耽误日常进行时工作生…日常进行时，工作生活两不耽误日常进行时工作生…</p>
        </div>
    </div>
</div>
