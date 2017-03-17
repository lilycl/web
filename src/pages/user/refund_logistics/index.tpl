<topbar title="填写物流单号"></topbar>


<p class="loistics_list_p">物流公司<i>*</i></p>
<div id="r-l-star">
<mt-cell
  title="请选择物流公司 "
  is-link
  @click="showPopup1(true)">
  *
</mt-cell>
</div>

<div id="r-a-textarea">
  <p class="loistics_list_p">物流单号<i>*</i></p>
  <mt-field 
  label="" 
  placeholder="请填写物流单号"  
  type="number">
  </mt-field>

  <p class="loistics_list_p">联系电话<i>*</i></p>
  <mt-field 
  label="" 
  placeholder="请填写联系号码"  
  type="tel" 
  :attr="{ maxlength: 11 }">
  </mt-field>

  <p class="loistics_list_p">退款说明<i>*</i></p>
  <mt-field 
  label="" 
  placeholder="请输入退款说明"
  type="textarea" rows="4"
  >
  </mt-field>

  <p class="loistics_list_p">上传凭证  最多3张</p>
  <div class="base-load clear" id="logi_imgwrap">
      <div class="base-load-img" id="btn_upload"></div>
  </div>

</div>
<a href="javascript:;"><li class="logi_btn">提交退货物流申请</li></a>

<div id="r-a-popup">

<mt-popup
    :visible.sync="popup1Visible"
    position="bottom"
    popup-transition="popup-fade"
>
<mt-radio
title="请选择物流公司"
align="right"
:value.sync="value"
style="background:#fff; width:100%;"
:options="['顺丰快递','申通快递','圆通快递','韵达快递','EMS']">
</mt-radio>
</mt-popup>

</div>