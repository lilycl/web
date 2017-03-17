<div class="bg-white" id="comment-list-header">
    <topbar 
    title="我的评价晒单" 
    :right="right"
    ></topbar>
    <div class="base-tab" id="user-c-m">
        <ul class="clear">
            <li @click="select(0)"><a :class="{'current': active === 0}" >全部</a></li>
            <li @click="select(1)"><a :class="{'current': active === 1}" >有图</a></li>
        </ul>   
    </div>
    <div class="base-add-none" v-if="item.length==0">
      <img src="../../../assets/images/user/no-comment.png"/>
      <p>评价晒单空空的</p>
      <a>我的订单</a>
    </div>
    <div>
        <div :style="{display: active === 0 ? 'block' : 'none'}">
            <comment-my :list="commentList"></comment-my>
        </div>
        <div :style="{display: active === 1 ? 'block' : 'none'}">
           <comment-my :list="commentList"></comment-my>
        </div>
    </div>
</div>