<div class="bg-white"> 
  <topbar 
    :title="title" 
    :right="right"
    @back="showEdit">
  </topbar> 
  <div class="base-bg">
    <div class="base-ps" style="position:relative;" id="pd">
        <div class="content-block">
            <mt-field :value.sync="form.recvName" label="" placeholder="姓名" @eventblur="checkname"></mt-field>
            <mt-field :value.sync="form.recvMobile" label="" placeholder="手机号码" type="tel" :attr="{ maxlength: 11 }" @eventblur="checkmobile"></mt-field>
            <div 
                :style="{color: form.recvProv=='省份' && form.recvCity=='城市' ? '#9b9b9b' : '#333'}"
                style="height: 39px;line-height: 39px; opacity:0.5;" 
                @click="showPopup(true)"
            >
                {{ form.recvProv }} | {{ form.recvCity }} | {{ form.recvDistict }}
            </div>
            <!--  <div 
              
                style="height: 39px;line-height: 39px;" 
                @click="showaddr"
            > -->
            
                <!-- <vue-area :show.sync="show" :result.sync="result" >{{ form.recvProv }} | {{ form.recvCity }} | {{ form.recvDistict }}</vue-area> -->
           
            </div>
            <mt-field :value.sync="form.recvAddr" label="" placeholder="详细地址，如街道、楼牌号等" type="textarea" rows="2" @eventblur="checkaddr"></mt-field>
            <div class="base-default-add">
                <div class="base-point" @click="select"><i v-if="form.isDefault === 1"></i></div>
                设置为默认地址
            </div>
        </div>
    </div>
    
  </div>
  <mt-popup
      :visible.sync="popupVisible"
      position="bottom"
      popup-transition="popup-fade">
        <mt-picker :slots="addressSlots" 
          @change="onAddressChange" 
          :visible-item-count="5"
        >
        </mt-picker>
    </mt-popup>
</div>

