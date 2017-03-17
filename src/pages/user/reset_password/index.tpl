<div class="bg-white">
<topbar title="修改登录密码"></topbar>
<div class="base-resetpwdqh">
    <ul>
    <li @click="select(0)"><a :class="{'current': active === 0}">1.确认手机号</a><i class="next"></i></li>
    <li @click="select(1)"><a :class="{'current': active === 1}">2.确认验证码</a><i class="next"></i></li>
    <li @click="select(2)"><a :class="{'current': active === 2}" style="margin-right: 0px;">3.确定新密码</a></li>
    </ul>   
</div>
<div class="base-resetpwdnr">
    <div :style="{display: active === 0 ? 'block' : 'none'}">
            <div class="user-bind-mobile" style="position:relative;">
                <li class="user-input user-input1">
                    <input type="text" name="fy-ipone" id="fy-ipone" placeholder="输入注册时使用的手机号码" />
                </li>
                <span>发送验证码</span>
            </div>
    </div>
    <div :style="{display: active === 1 ? 'block' : 'none'}">
            <div class="user-bind-mobile" style="position:relative;">
                <li class="user-input user-input1">
                    <input type="text" name="fy-ipone" id="fy-ipone" placeholder="输入验证码" />
                </li>
                <span>确认</span>
            </div>
    </div>
    <div :style="{display: active === 2 ? 'block' : 'none'}">
            <div class="user-bind-mobile" style="position:relative;">
                <li class="user-input" style="border-bottom: 0.5px solid #f5f5f5;">
                    <input type="" name="fy-yanzhengma" placeholder="输入新密码"  id="pwd"/>
                    <i class="base-password">密码要2个字符以上</i>
                </li>
                <li class="user-input" style="border-bottom: 0.5px solid #f5f5f5;">
                    <input type="" name="fy-yanzhengma" placeholder="确定新密码"  id="pwd"/>
                    <i class="base-password">密码不一致</i>
                </li>
                <span>确认修改</span>
            </div>
    </div>
</div>
</div>

