<div id="app">
    <div id="com-topbar">     
        <topbar title="查看物流" ></topbar>
    </div>
    <div class="base-tab" id="logistics-tab">
        <ul>
            <li @click="select(0)"><a :class="{'current': active === 0}" >包裹一</a></li>
            <li @click="select(1)"><a :class="{'current': active === 1}" >包裹二</a></li>
        </ul>   
    </div>
    <div class="base-nr base-logiqhnr">
        <div :style="{display: active === 0 ? 'block' : 'none'}" style="margin-top: 10px;">
            <package></package>
            <div id="logistic-card"><item-card></item-card></div>
            <div class="base-bg" id="logistic-cnt">
                <div class="base-goods-up clear">
                    <span class="fl span1">物流单号 : 9887655437</span>
                    <span class="fr span2">物流公司 : 顺丰</span>
                </div>
                <div class="base-logi-down clear">
                    <div class="base-logi-dl fl">物流状态：</div>
                    <div class="base-logi-dr fl">
                        <div class="logilist0"><i class="logic"></i><i class="logiline"></i>
                            商品已签收
                        </div>
                        <div class="logilist1"><i class="logic"></i><i class="logiline"></i>
                            2016-11-19  包裹已出库
                        </div>
                        <div class="logilist1"><i class="logic"></i><i class="logiline"></i>
                            2016-11-19  包裹已出库
                        </div>
                        <div class="logilist1"><i class="logic"></i>
                            2016-11-19 ...
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    
        <div :style="{display: active === 1 ? 'block' : 'none'}" style="margin-top: 10px;">
            <div id="logistic-card"><item-card></item-card></div>
            <div class="base-bg" id="logistic-cnt">
                <div class="base-goods-up clear">
                    <span class="fl span1">物流单号 : 9887655437</span>
                    <span class="fr span2">物流公司 : 顺丰</span>
                </div>
                <div class="base-logi-down clear">
                    <div class="base-logi-dl fl">物流状态：</div>
                    <div class="base-logi-dr fl">
                        <div class="logilist0"><i class="logic"></i><i class="logiline"></i>
                            商品已签收
                        </div>
                        <div class="logilist1"><i class="logic"></i><i class="logiline"></i>
                            2016-11-19  包裹已出库
                        </div>
                        <div class="logilist1"><i class="logic"></i><i class="logiline"></i>
                            2016-11-19  包裹已出库
                        </div>
                        <div class="logilist1"><i class="logic"></i>
                            2016-11-19 ...
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    </div>

</div>