<template>
  <div v-show="!edit">
    <div class="base-add-none" v-if="item.length==0">
      <img src="../../assets/images/user/no-wish.png"/>
      <p>心愿单空空的</p>
      <a @click="gotoindex">返回首页</a>
    </div>
    <mt-cell-swipe  v-for="goods in item" :right="[
          {
            content: '删除',
            style: { background: '#d70000', color: '#fff',lineHeight: '75px',},
            handler: () => {this.delete(goods.itemId,goods)}
          }
        ]"
        >
        <div class="base-add0 clear base-browser-record" id="base-es" style="height:74px;">
          <item-card :item.sync="{'title': goods.title, 'subtitle': goods.subtitle, 'image': goods.image, 'price':goods.bidPrice}" @click="__gotoPage('item_detail', {id: goods.itemId})"></item-card>
      </div>
       <div class="base-add-clear dn"><i></i></div>
    </mt-cell-swipe>
 </div>
 <div v-show="edit">
    <div v-for="goods in item" class="clear base-browser-record" id="base-ess" style="height:74px;">
      <div  @click="__gotoPage('item_detail', {id: goods.itemId})">
        <div class="base-point" @click.stop="select($index)"><i v-if="goods.selected"></i></div>
        <item-card 
        :item.sync="{'title': goods.title, 'subtitle': goods.subtitle, 'image': goods.image, 'price':goods.bidPrice}"
        style="padding-left: 30px;"
        ></item-card>
      </div>
    </div>
 </div>
</template>
<script>
    import S from 'service';
    import ItemCard from 'modules/common/ItemCard';
    import {CellSwipe, Cell } from 'mint-ui';
    const props = ['item', 'edit', 'none',];
    const events = {
      CHECK_CLICK: 'check-click',
      DELETE: 'delete'
    };

  export default {
    props: props,
    components: { ItemCard,
       [CellSwipe.name]: CellSwipe, [Cell.name]: Cell,
    },

    data() {
        return {
            list: [],
            item:[],
        };
     
    },
    methods: {

      select(index) {
        this.$dispatch(events.CHECK_CLICK, index );
      },
      delete(id,item) {
        this.$dispatch(events.DELETE, id, item);

        
      },
    showPopup(show) {
			this.popupVisible = show
		},
    gotoindex(){
      window.sessionStorage.setItem('TAB_SHOW', 0);
      this.__gotoPage("index");
    },
      init() {
        
      },
     
  },
    ready() {
        this.init();


    }
  };   

</script>
<style lang="less">
@import "../../pages/common.less";

.base-browser-record{
 background: #fff;
 margin: 0 auto;
 position: relative;
 width: 290px;
 border-bottom:0.5px solid #eee;
  .item-card{
    padding: 0px;
  }
}

.base-browser-record .img{
 width: 55px; 
 height: 55px;
 text-align: center; 
 line-height:55px; 
 margin-left:0px;
 margin-top: 10px;
 }
.base-browser-record img{
  max-height: 55px;
  max-width: 55px; 
  vertical-align: middle; 
}

#base-es span{
  width:58px; 
  height: 18px; 
  border-radius: 2px; 
  background: #fff; 
  line-height: 18px; 
  text-align: center;
  color: #000; 
  border: 0.5px solid #eee; 
  font-size: 8px;
  position: absolute;
  right: 10px;
  top:48px;
  }
#base-es span:active{background:#FAFAFA;}
#base-ess{width: 100%;}

.pop-cnt{
    width:200px;
    height:108px;
    border-radius:10px;
    background: #fff;
    position: relative;
    p{
        line-height: 70px;
        text-align: center;
        font-size: 13px;
    }
    .pop-btn{
        position: absolute;
        bottom: 0px;
        width: 100%;
        padding: 0px 20px 10px 20px;
        span{
            width:46%;
            height:28px;
            border: 1px solid @com-border;
            display: inline-block;
            float: left;
            text-align: center;
            line-height: 28px;
            margin-rignt:10px;
            color: @com-subtitle;
        }
        span:nth-child(1){
            border:0.5px solid @com-base;
            color: @com-base;
            background:#fdf2f3;
            margin-right:10px;
        }
    }
}


</style>