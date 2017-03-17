<div class="page-index-header">
    <div class="page-index-header-d">
        <i></i>
        <img src="../../../assets/images/index/logo.png" />
        <div class="sex-tab">
            <!-- <img src="../../../assets/images/index/message.png"/>  -->
            <span @click="showPopup(true)"><i></i>女子<img src="../../../assets/images/index/go_more.png"></span>
        </div>
    </div>
</div>
<div class="main-wrap" :style="{'height': containerHeight}" id="main">
    <em><i></i></em>
    <cat-nav :items="filters"></cat-nav>
    <img-slide></img-slide>
    <banner-for2plus1></banner-for2plus1>
    <hot-sale></hot-sale>
    <line-for2items-to-scene></line-for2items-to-scene>
    <ad-banner></ad-banner>
    <banner-for1plus4></banner-for1plus4>
    <line-for2items-to-scene></line-for2items-to-scene>
    <banner-for1plus4></banner-for1plus4>
    <!--  <nav-line-for3items-more></nav-line-for3items-more> -->
    <nav-line-for2items-more></nav-line-for2items-more>
    <recommend-items></recommend-items>
</div>
<mt-popup :visible.sync="popupVisible" position="top" popup-transition="popup-fade" style="width:320px;">
    <div id="popUp-header">
        <topbar title="选择性别入口" fixed :right="right" :show-left="false"></topbar>
    </div>
    <div class="cat-choose" id="sports-choose">
        <ul>
            <li @click="choose(0)" :class="{'current': active === 0}">
                <img src="../../../assets/images/index/default_run.png" />
                <div>
                    <p>男子入口</p>
                    <span>跑起来  High起来~</span>
                </div>
                <i></i>
            </li>
            <li @click="choose(1)" :class="{'current': active === 1}">
                <img src="../../../assets/images/index/default_run.png" />
                <div>
                    <p>女子入口</p>
                    <span>跑起来  High起来~</span>
                </div>
                <i></i>
            </li>
        </ul>
    </div>
</mt-popup>