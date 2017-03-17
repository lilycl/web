<div class="bg-gray" id="user-info-cnt">
<topbar 
    fixed 
    title="个人资料"
>
</topbar>
<mt-cell title="头像"  is-link  value="" icon="more" style="margin-top:10px; padding-top:10px;" id="personal-head">
    <img slot="icon" :src="edit.form.user.image">
    <input type="file" v-el:photo >
</mt-cell>
<mt-cell title="用户ID"  :value.sync="edit.form.userId" icon="more"></mt-cell>
<mt-cell @click="itemClick('userNick', '昵称')" title="昵称"  is-link  :value.sync="edit.form.userNick" icon="more"></mt-cell>
<mt-cell @click="itemClick('signature', '个性签名')"  title="个性签名"  is-link  :value.sync="edit.form.userSign" icon="more" id="span"></mt-cell>
<mt-cell @click="itemClick('sex', '性别')"  title="性别"  is-link  :value="edit.form.sex | sex" icon="more" style="margin-top:10px;"></mt-cell>
<mt-cell @click="itemClick('birth', '出生日期')" title="出生日期"  is-link  :value.sync="edit.form.birthDay" icon="more"></mt-cell>
<mt-cell @click="itemClick('height', '身高')" title="身高"  is-link  :value.sync="edit.form.height" icon="more"></mt-cell>
<mt-cell @click="itemClick('weight', '体重')" title="体重"  is-link  :value.sync="edit.form.weight" icon="more"></mt-cell>
<mt-cell v-if="edit.form.mobile==''" title="绑定手机号" @click="__gotoPage('bind_mobile')" is-link  value="" icon="more" style="margin-top:10px;"></mt-cell>
<mt-cell v-if="edit.form.mobile !=''" title="修改绑定手机号" @click="__gotoPage('unbind_mobile')" is-link  :value.sync="edit.form.mobile" icon="more" style="margin-top:10px;"></mt-cell>
<info :edit.sync="edit"></info>
</div>
