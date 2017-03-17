<div class="bg-white">
  <topbar title="解绑手机号"></topbar>
  <div class="base-tab " id="user-unbind-mobile">
      <ul>
          <li><a :class="{'current': active == 0}"><i></i>1. 验证身份</a></li>
          <li><a :class="{'current': active == 1}"><i></i>2. 绑定新手机</a></li>
      </ul>
  </div>
  <div>
      <div>
          <div class="user-bind-mobile" style="position:relative; margin-top: 10px">
              <li class="user-input user-input1">
                  <input type="tel" v-if="active == 0" placeholder="输入注册时使用的手机号码" v-model="mobile"/>
                  <input type="tel" v-if="active == 1"  placeholder="输入新手机号码" v-model="mobile"/>
                  <a v-show="interval == 0" class="user-send-vcode" @click=sendCode>
											发送验证码
									</a>
									<a v-show="interval > 0" class="user-send-vcode" id="gray">
											{{interval}}s后重试
									</a>
              </li>
              <li class="user-input user-input1">
                  <input type="tel"  placeholder="输入验证码" v-model="code"/>
                  <i class="user-vcode-tip"  v-if="status == 500">验证码错误</i>
                  <i class="user-vcode-tip"  v-if="status == 404">验证码失效</i>
              </li>
              <span @click="bind" v-if="active == 0">下一步</span>
              <span @click="bind" v-if="active == 1">确认绑定</span>
          </div>
      </div>
  </div>
</div>

