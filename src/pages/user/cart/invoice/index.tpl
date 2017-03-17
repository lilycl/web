<div class="bg-gray" id="invoice-header">
  <div id="invoice-cnt">
    <div id="sex-header">
      <topbar title="发票信息"></topbar>
    </div>
    <mt-cell title="是否开票"  is-link  value="开发票" icon="more" style="margin-top:10px;">
    </mt-cell>
    <mt-cell title="发票类型"  is-link  value="电子发票" icon="more" style="margin-top:10px;">
    </mt-cell>
    <div id="receipt-message">
      <mt-radio
        align="left"
        title="发票抬头"
        style=" margin-top:2px;"
        :options="['个人','单位']">
      </mt-radio>
    </div>
  </div>
  <div id="receipt-name">
  <mt-field 
      label="" 
      placeholder="请输入单位名称">
  </mt-field>
  </div>
  <div class="invoice-info">
    <p>收票人信息</p>
    <ul>
        <li>
            <lable><i style="color: red">* </i>收票人手机</lable>
            <span>157****1264</span>
        </li>
        <li>
            <lable><i style="color: #fff">* </i>收票人邮箱  </lable>
            <span>3388038381@qq.com</span>
        </li>
        
    </ul>
  </div>
    <div id="receipt-cnt">
    <mt-cell title="发票内容"  is-link  value="明细" icon="more" style="margin-top:10px;">
  </mt-cell>
  </div>
    <a class="confirm-btn">确定</a>
</div>
