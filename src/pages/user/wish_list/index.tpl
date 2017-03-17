<div class="bg-gray" id="wish-list-header">
<topbar title="心愿单" 
  fixed 
  :right="right"
  @back="showEdit">
</topbar>
<div id="wish-list">
    <item-remove 
        :item.sync="list"
        :edit="edit.show"
        @check-click="checkClick"
        @delete="deleteItem"
        :index="$index"
        :none="show">
	</item-remove>
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

