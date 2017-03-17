<div class="bg-white" id="message-list">
    <topbar title="消息" :right="right">
    </topbar>
    <div @click="__gotoPage('message_detail')" v-for="i in 3">
        <mt-cell-swipe :right="[
          {
            content: '开启消息免打扰',
            style: { background: '#9b9b9b', color: '#fff',lineHeight: '55px',},
          }
        ]">
            <div class="clear base-browser-record" id="base-msg">
                <div class="base-add0-l fl img">
                    <img src="" />
                </div>
                <div class="base-add0-r fl">
                    <p class="p0">订单消息<span>2017-2-17</span></p>
                    <p class="p1">日常进行时，工作生活两不耽误日常进行时工作生…</p>
                </div>
            </div>
        </mt-cell-swipe>
    </div>

</div>