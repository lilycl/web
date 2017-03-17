<div class="bg-gray"  id="page-common">
    <topbar :slot-title=true fixed>
        <div class="header-title"style="height:40px;line-height:40px;" @click="showPopup(true)">
            热卖 <img src="../../../assets/images/index/more_cat.png">
        </div>
    </topbar>
    <img-slide></img-slide>
    <cat-nav :items="filters" id="scroll-list"></cat-nav>
    <sort-line-for2items></sort-line-for2items>
    <mt-popup
        :visible.sync="popupVisible"
        position="top"
        popup-transition="popup-fade"
        style="width:100%;"
        >
        <div id="popUp-header">
            <topbar 
            title="选择商品分类" 
            fixed
            :right="right"
            :show-left="false"
            ></topbar>
        </div>
        <div class="cat-choose">                
            <ul>
                <li v-for="i in 6" @click="choose($index)" :class="{'current': active === i}">鞋 <i ></i></li>
            </ul>
        </div>
       
    </mt-popup>
</div>
