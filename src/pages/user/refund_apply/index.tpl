<div class="bg-gray">
<div id="r-a-header">
<topbar 
title="申请退款"
:right="right"
></topbar>
</div>
<p class="loistics_list_p">退款类型<i>*</i></p>
<!-- <mt-radio
align="right"
:value.sync="value"
style="background:#fff; margin-top:-10px;"
:options="['我要退款','我要换货']">
</mt-radio> -->
<div id="r-a-star">
<mt-cell
  title="选择申诉类型 "
  is-link
  @click="showPopup1(true)">
  *
</mt-cell>
<mt-cell
  title="选择申诉数量 "
  is-link
  @click="showPopup2(true)">
  *
</mt-cell>
<mt-cell
  title="货物物流状态 "
  is-link>
  *
</mt-cell>
<mt-cell
  title="选择申请类型 "
  is-link
  @click="showPopup3(true)">
  *
</mt-cell>
</div>
<!-- 申请退款退货 -->
<div id="r-a-textarea">
<!-- <p class="loistics_list_p">退款类型<i>*</i></p>
<mt-field 
label="" 
placeholder="仅退款" 
type="textarea" rows="4">
</mt-field> -->

<!-- <p class="loistics_list_p">填写件数<i>*</i></p>
<mt-field 
label="" 
placeholder="请填写件数" 
type="textarea" rows="4">
</mt-field> -->

<p class="loistics_list_p">退款原因<i>*</i></p>
<mt-field 
label="" 
placeholder="大小不合适，需要换一件"  
type="textarea" rows="4">
</mt-field>

<!-- <p class="loistics_list_p">货物状态<i>*</i></p>
<mt-field 
label="" 
placeholder="未收到货" 
type="textarea" rows="4">
</mt-field> -->

<p class="loistics_list_p">退款金额<i>*</i></p>
<mt-field 
label="" 
placeholder="" 
type="textarea" rows="2">
</mt-field>

<p class="loistics_list_p">退款说明<i>*</i></p>
<mt-field 
label="" 
placeholder="输入退款说明"  
type="textarea" rows="4">
</mt-field>
<!-- 申请退款退货 -->
<!-- 申请客服介入 -->
<p class="loistics_list_p">申诉说明<i>*</i></p>
<mt-field 
label="" 
placeholder="输入申诉说明"  
type="textarea" rows="4">
</mt-field>
<!-- 申请客服介入 -->
<!-- 申请换货 -->
<p class="loistics_list_p">换货原因<i>*</i></p>
<mt-field 
label="" 
placeholder="大小不合适，需要换一件"  
type="textarea" rows="4">
</mt-field>
<p class="loistics_list_p">换货说明<i>*</i></p>
<mt-field 
label="" 
placeholder="输入换货说明"  
type="textarea" rows="4">
</mt-field>
<!-- 申请换货 -->
<!-- 申请维修 -->
<p class="loistics_list_p">维修原因<i>*</i></p>
<mt-field 
label="" 
placeholder="大小不合适，需要换一件"  
type="textarea" rows="4">
</mt-field>
<p class="loistics_list_p">维修说明<i>*</i></p>
<mt-field 
label="" 
placeholder="输入维修说明"  
type="textarea" rows="4">
</mt-field>
<!-- 申请维修 -->

<p class="loistics_list_p">上传凭证  最多3张</p>
<div class="base-load clear" id="logi_imgwrap">
  <div class="base-load-img" id="btn_upload">
  </div>
</div>



</div>
<a href="javascript:;"><li class="logi_btn" style="margin-bottom: 20px;">提交申请</li></a>

<div id="r-a-popup">
<mt-popup
    :visible.sync="popup1Visible"
    position="bottom"
    popup-transition="popup-fade"
>
<mt-radio
title="选择申诉类型"
align="right"
:value.sync="value"
style="background:#fff; width:100%;"
:options="['我要退款','我要换货']">
</mt-radio>
</mt-popup>

<mt-popup
    :visible.sync="popup2Visible"
    position="bottom"
    popup-transition="popup-fade"
>
222
</mt-popup>

<mt-popup
    :visible.sync="popup3Visible"
    position="bottom"
    popup-transition="popup-fade"
>
333
</mt-popup>



</div>
</div>