<div class="bg-white">
    <topbar title="注册" :showClose="true"></topbar>
    <form>
        <div class="user-bind-mobile" style="position:relative;">
            <li class="user-input user-input1">
                <input v-model="form.phone" type="text" placeholder="输入手机号" />
                <a href="javascript:;" class="user-send-vcode">发送验证码</a>
            </li>
            <li class="user-input" style="border-bottom:0.5px solid #f5f5f5;">
                <input v-model="form.vcode" type="text" placeholder="输入验证码" id="sendMsg"/>
                <i class="base-yzm" v-show="vcodeError">验证码错误</i>
            </li>
            <li class="user-input" style="border-bottom: 0.5px solid #f5f5f5;">
                <input v-model="form.password" type="password" placeholder="输入密码"  id="pwd"/>
                <i class="base-password" v-show="passwordError">密码错误</i>
            </li>
            <li class="user-input" style="border-bottom: 0.5px solid #f5f5f5;">
                <input v-model="form.password2" type="password" placeholder="再次输入密码"  id="pwd"/>
                <i class="base-password" v-show="password2Error">密码错误</i>
            </li>
            <div class="base-regagree"><i></i>同意<em>《用户协议》</em></div>
            <a href="javascript:;" @click="reg"><li class="base-reg">注册</li></a>
        </div>
    </from>
</div>

