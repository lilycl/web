<div class="bg-gray" id="browse-record">
<topbar title="我的浏览" 
  fixed 
  :right="right"
  @back="showEdit">
</topbar>
<div class="base-add-none" v-if="list.length===0">
    <img src="../../../assets/images/user/no-history.png"/>
    <p>尚无浏览记录</p>
    <a @click="gotoindex">返回首页</a>
</div>
<div v-show="!edit.show"  v-for="d in list">
  <p class="base-tag" style="background:#f2f2f2">{{$key}}</p>
  <mt-cell-swipe v-for="item in d" :right="[
      {
        content: '删除',
        style: { background: '#d70000', color: '#fff',lineHeight: '75px',},
        handler: () => {this.delete(item.browseDate,item.itemId,item)}
      }
    ]">
      <div class="base-add0 clear base-browser-record" id="base-es" style="height:74px;">
        <item-card :item.sync="{'title': item.title, 'subtitle': item.subtitle, 'image': item.image, 'price':item.salePrice}"></item-card>
      </div>
      <div class="base-add-clear dn"><i></i></div>
  </mt-cell-swipe>

</div>

<div v-show="edit.show" v-for="d in list">
    <p class="base-tag" style="background:#f2f2f2">{{$key}}</p>
    <div v-for="item in d" class="base-add0 clear base-browser-record" id="base-ess" style="height:74px;">
      <div class="base-point" @click="select($key,$index)"><i v-if="item.isSelected"></i></div>
      <item-card :item.sync="{'title': item.title, 'subtitle': item.subtitle, 'image': item.image, 'price':item.salePrice}" style="padding-left: 35px;"></item-card>
    </div>
</div>

<div class="base-bottom clear" v-show="edit.show">
    <div class="w-320">
        <div class="base-point base-pointall" @click="selectAll"><i v-if=" allSelected"></i></div>
        <span class="base-sum0 fl">
            全选
        </span>
        <span class="base-clear fr" @click="confirm"><a class="delete" :class="{'active': selectedNum > 0}" >删除</a></span>
    </div>
</div>
</div>