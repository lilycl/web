<div id="page-common">
    <div class="meichant-name clear">
        <span class="back" @click="goback"></span>
        <span class="home"></span>
        <span class="message"><i>1</i></span>
        <div class="base-width clear"  @click="__gotoPage('vendor_detail', {id: list.vendor.vendorId})">
            <div class="meichant-name-img fl"><img src="{{list.vendor.vendorLogo}}"/></div>
            <div class="meichant-name-text fl">
                <p class="meichant-name-p0 ">{{list.vendor.vendorName}}<span>品牌直营</span></p>
                <p class="meichant-name-p1 ">{{list.vendor.vendorDesc}}</p>
            </div>
        </div>
    </div>
    <cat-nav :items="filters" @select="selectitem" id="scroll-list"></cat-nav>
    <line-for2items-more :items="items"></line-for2items-more>
</div>
