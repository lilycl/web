<div id="app"> 

        <div v-show="this.activeTab === 0" style="padding-bottom: 50px;background:#f5f5f5;">
            <main></main>
        </div>
        <div v-show="this.activeTab === 1" style="height: 100%;">
            <cat></cat>
        </div>
        <div v-show="this.activeTab === 2" style="padding-bottom: 50px;background:#f5f5f5; min-height: 100%">
            <cart :show="this.__getPageData().active"></cart>
        </div>
        <div v-show="this.activeTab === 3" style="padding-bottom: 50px; padding-top:10px;background:#f5f5f5;">
            <person_info></person_info>
        </div>
        <bottom-bar
            @tab="tabTo"
            :index="activeTab"
            :show="this.__getPageData().active"
        ></bottom-bar>
</div>