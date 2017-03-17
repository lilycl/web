<div class="comment-bg">
<topbar title="评价晒单"></topbar>
<div class="comment-cnt">
    <div  class="base-add0 clear base-browser-record" id="base-es" style="height:74px;">
        <item-card> </item-card>
    </div>
    <div class="base-eva">
        <div class="fl">描述相符</div>
        <div class="base-star fl">
            <star></star>
        </div>
    </div>
    <div id="comment-field">
        <mt-field 
            label="" 
            placeholder="您的建议对我们十分重要     字数请控制在120个字以内~" 
            type="textarea" 
            rows="7"
        ></mt-field>
    </div>
    <p class="base-set-textp">最多添加4张图片</p>
    <div class="base-load clear" id="imgwrap">
        <img  :src="edit.image">
        <input type="file" v-el:photo >
    </div>
</div>
<div id="eveshare">
    <div class="base-eva">
        <div class="fl">商品质量</div>
        <div class="base-star fl">
            <star @star-change="qualityStar"></star>
        </div>
    </div>
    <div class="base-eva">
        <div class="fl">快递服务</div>
        <div class="base-star fl">
            <star></star>
        </div>
    </div>
</div>
<li class="base-newadd " id="base-eva-sure" @click="submit">提交评价</li>
</div>
