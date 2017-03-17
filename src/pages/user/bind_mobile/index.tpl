<div class="bg-white">
  <topbar title="绑定手机号码"></topbar>
  <div class="user-bind-mobile">
    <li class="user-input user-input1">
        <input type="tel" placeholder="输入手机号" v-model="mobile"/>
        <a v-show="interval == 0" class="user-send-vcode" @click=sendCode>
          发送验证码
        </a>
        <a v-show="interval > 0" class="user-send-vcode" id="gray">
          {{interval}}s后重试
        </a>
    </li>
    <li class="user-input" style="border-bottom:0.5px solid #f5f5f5;">
        <input type="tel"  placeholder="输入验证码" v-model="code"/>
        <i class="user-vcode-tip"  v-if="status == 500">验证码错误</i>
        <i class="user-vcode-tip"  v-if="status == 404">验证码失效</i>
    </li>
    <span @click="bind">确认绑定</span>
  </div>
</div>