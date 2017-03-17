<div style="background: #fff;" id="address">
    <topbar title="地址管理" 
      :right="right"
      @back="showEdit">
    </topbar>
    <div v-if="list.length === 0" class="base-add-none">
        <img src="../../../assets/images/user/no-address.png"/>
        <p>尚未填写收货地址</p>
        <a @click="gotoindex">返回首页</a>
    </div>
    <div style="position: relative;"  v-show="!edit.show">
      <mt-cell-swipe v-for="item in list" :right="[
        {
          content: '删除',
          style: { background: '#d70000', color: '#fff',lineHeight: '56px',},
          handler: () => {this.delete(item.addrId)}
        }
      ]">
        <div @click="__gotoPage('new_address', {
                        addrId: item.addrId,
                        recvAddr: item.recvAddr,
                        recvCity: item.recvCity,
                        recvDistict: item.recvDistict,
                        recvMobile: item.recvMobile,
                        recvName: item.recvName,
                        recvProv: item.recvProv,
                        isDefault: item.isDefault
                    })" 
             class="base-width add">
            <div class="base-add0 clear " >
                <div class="base-add0-l fl" style="margin-left:0px;">
                    <p class="p0">{{item.recvName}}</p>
                    <p class="p1" v-if="item.isDefault === 1">默认</p>
                </div>
                <div class="base-add0-r fl">
                    <a href="javascript:;"><p class="p0">{{item.recvMobile}}</p></a>
                    <p class="p1">{{item.recvCity}}{{item.recvAddr}}</p>
                </div>
                <span class="base-add0-set fr"></span>
            </div>
        </div>
        </mt-cell-swipe>
    </div>
    <div class="w-320" v-show="edit.show" v-for="item in list" style="position:relative;">
        <div class="base-point manadd" @click="select($index)"><i v-if="item.selected"></i></div>
        <div class="add">
            <div class="base-add0 clear">
                <div class="base-add0-l fl" style="margin-left:30px;">
                    <p class="p0">{{item.recvName}}</p>
                    <p class="p1" v-if="item.isDefault === 1">默认</p>
                </div>
                <div class="base-add0-r fl">
                    <a href="javascript:;"><p class="p0">{{item.recvMobile}}</p></a>
                    <p class="p1">{{item.recvCity}}{{item.recvAddr}}</p>
                </div>
            </div>
        </div>
    </div>    
    
    <div class="base-bg" v-show="!edit.show">
        <div class="base-bottom" id="address-list-bottom">
            <li class="base-newadd" @click="__gotoPage('new_address')">+ 增加地址</li>
        </div>
    </div>
    <div class="base-bottom clear" v-show="edit.show">
        <div class="base-point base-pointall" @click="selectAll"><i v-if="allSelected"></i></div>
        <span class="base-sum0 fl">
            全选
        </span>
        <span class="base-clear fr" @click="delete"><a class="delete" :class="{'active': selectedNum > 0}" >删除</a></span>
    </div>
    <mt-popup
    :visible.sync="popupVisible"
    position="middle"
    popup-transition="popup-fade">
      <div class="pop-cnt">
          <p>确认要删除此商品吗？</p>
          <div class="pop-btn">
          <span @click="default">放弃</span>
          <span @click="confirm">确认</span>
          </div>
      </div>
    </mt-popup>
</div>
