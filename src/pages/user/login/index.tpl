<div style="background: #fff; min-height:100%;">
    <topbar title="登录" 
    :showClose="true"
    :right="right"
    ></topbar>
    <form>
        <div class="user-bind-mobile" style="position:relative;">
            <li class="user-input user-input1">
                <input v-model="form.account" type="text" name="fy-ipone" placeholder="输入手机号码/小米账号/邮箱" />
                <i v-show="accountError" class="base-phone">格式不对</i>
            </li>
            <li class="user-input" style="border-bottom: 0.5px solid #f5f5f5; position:relative;">
                <input v-model="form.password" type="password" name="fy-yanzhengma" placeholder="输入密码"  />
                <i v-show="passwordError" class="base-password">密码错误</i>
            </li>
            <div @click="__gotoPage('reset_password')" class="base-set">忘记密码</div>
            <span>登录</span>
        </div>
    </form>
</div>
