<template>
  <div>
  	<div class="commentList" v-for="l in list" > 
        <p class="commentList-user">{{l.userNick}}<i>{{l.created}}</i></p>
        <div class="commentList-item clear">
              <div class="commentList-item-head">
                  <img src="{{l.userImage}}" />
              </div>
              <div class="commentList-item-text">
                  <p class="p1">{{l.cmtContent}}</p>
                  <div class="p2 clear">
                      <div class="img"><img src="{{l.cmtImages}}"/></div>
                      <div class="img"><img src="{{l.cmtImages}}"/></div>
                      <div class="img"><img src="{{l.cmtImages}}"/></div>
                      <div class="img"><img src="{{l.cmtImages}}"/></div>
                  </div>
                  <div class="des">{{l.skuName}}</div>
              </div>
					<div v-for="size in l.children">
						{{size.size}}
					</div>
        </div>
    </div> 
    </div> 
</template>    

<script>
	import S from 'service';
  import { Cell } from 'mint-ui';

  const props = {
    /**
     * 评论列表
     * @type {Object}
     */
    list: {
      type: Array,
      default: []
    }
  };

  const events = {
  };

  export default {
    components: {
      [Cell.name]: Cell
    },
    props: props,
    data() {
			return {
				list: []
			};
    },
    methods: {
    	gotoComment(name) {
    		this.__gotoPage('comment', {name: name})
    	}
    },
    ready() {
			S.order.getCommentList({itemId:522644383208}).then(ret => {
				this.list = ret.data;
        console.info(ret);
			});
    }
  };    
</script>


<style lang="less">
  @import "../../pages/boy.less";
  @import "../../pages/common.less";

.commentList{
  background: #fff;
  padding: 0px 15px;
  border-top:0.5px solid @com-border;
  /*&:last-child{
    border-bottom: none;
  }*/
}
.commentList-item{
  width: 100%;
  padding-bottom: 10px;
  &:active{
    background:#FAFAFA;
  }
}

.commentList-item-head{
  float: left;
  width: 36px; 
  height:36px;
   img{
    width: 36px; 
    height: 36px; 
    border-radius: 50%; 
    margin:-20px 0px 0px 0px;
  }
}

.commentList-item-text{
  float: right;
  width: 245px; 
  position:relative;
  .p1{
    font-size:8px; 
    color:#000; 
    margin-top:5px; 
    overflow:hidden; 
    text-overflow:ellipsis; 
    line-height:12px;
  }
  .p2{
    margin-top: 5px; 
    .img{
        width: 50px; 
        height: 50px; 
        margin-right:5px; 
        margin-left:5px; 
        float: left; 
        text-align: center; 
        line-height: 50px; 
        position: relative;
          img{ 
            max-width:100%;
            max-height:100%;
            position:absolute;
            top:50%;left:50%;
            -webkit-transform-origin:50% 50%;
            -webkit-transform:translate3d(-50%,-50%,0);
          }
      }
  }
}

.commentList-item-text .des{
  font-size: 8px; 
  color: #9b9b9b; 
  margin-top: 10px
}

.commentList-user{
  font-size:11px; 
  color:#000; 
  height: 28px; 
  line-height: 35px; 
  position: relative; 
  text-indent:45px;
  i{ 
      color: #9b9b9b; 
      font-size:8px; 
      position:absolute; 
      right:0px; 
      top:0px;
    }
}
</style>