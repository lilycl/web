<div id="page-common" class="bg-gray">
    <topbar :slot-title=true fixed>
        <div class="header-title" @click="showPopup(true)">
            鞋 
            <img src="../../../assets/images/index/more_cat.png">
        </div>
    </topbar>
    <img-slide></img-slide>
    <banner-for1plus4></banner-for1plus4>
    <nav-line-for3items-more></nav-line-for3items-more>
    <recommend-items></recommend-items>
    <mt-popup
        :visible.sync="popupVisible"
        position="top"
        popup-transition="popup-fade"
        style="width:100%;"
        >
        <div id="popUp-header">
            <topbar 
            title="选择运动分类" 
            fixed
            :right="right"
            :show-left="false"
            ></topbar>
        </div>
        <div class="cat-choose" id="sports-choose">                
            <ul>
                <li v-for="i in 3" @click="choose($index)" :class="{'current': active === i}">
                	<img src="../../../assets/images/index/default_run.png"/> 
                	<div>
                		<p>跑步运动</p>
                		<span>跑起来  High起来~</span>
                	</div>
                	<i></i>
                </li>
            </ul>
        </div>
       
    </mt-popup>
</div>
