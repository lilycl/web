<template> 
    <div class="modl-hot-sale">
        <div class="title" @click="__gotoPage('list')">
            <i><img src="../../assets/images/index/icon_hot.png"/></i>
            <span>热卖</span>
        </div>
       <line-for3items-more></line-for3items-more>
        <div class="hot-cat">
             <ul class="clear">
                <li v-for="i in 6" @click="joinCart">
                    <img src="../../assets/images/index/xiezi.png"/>
                    <p class="p0">运动鞋</p>
                </li>
             </ul>
        </div>
    </div>
 
</template>

<script>
import LineFor3itemsMore from './LineFor3itemsMore';
  const props = {
    items: {
      type: Array
    }
  };

  export default {
    props: props,
    components: { 
        LineFor3itemsMore,
    },
    data(){
        return{
            show: true,

        }
    },
    methods: {

        joinCart(){
            this.show=!this.show;
           
        }
    },
    ready() {
    }
  };    
</script>
<style lang="less">

@import "../../pages/boy.less";
.modl-hot-sale{
    background: #fff;
    .title{
        height:33px;
        line-height:33px;
        border-bottom:0.5px solid #eee;
        color:#000;
        margin-top:10px;
        text-align: center;
        position: relative;
        i{
            width:16px;
            height:16px;
            position: absolute;
            left: 132px;
            top:7px;

            img{
                width: 100%;
            }       
       }
        span{
            font-size:13px;
            margin-left:10px;
        }
    } 
    .hot-cat{
        width:100%;
        height:88px;
        border-bottom:0.5px solid #eee;
        overflow:scroll;
        background: #fff;
        -webkit-overflow-scrolling: touch;
        ul{
            width:500px;
            padding-top:15px;
            margin-left:15px;

            li{
                float: left;
                width:58px;
                height:58px;
                background: #F5F5F5;
                border-radius:50%;
                margin-right:15px;
                text-align:center;
                img{
                    height:18px;
                    margin-top:15px;
                    width:30px;
                }
                .p0{
                    margin-top:6px;
                    font-size: 8px;
                }
            }
        }

    }
   
}

</style>