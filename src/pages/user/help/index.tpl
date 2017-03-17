<div class="bg-gray">
<div id="help-header"><topbar title="帮助中心"></topbar></div>
<!-- <mt-search
  :value.sync="value"
  cancel-text="取消"
  placeholder="请输入问题关键字">
</mt-search> -->
<div class="help-wrap">
    <div class="base-tab" id="help-tab">
        <ul class="clear">
            <li @click="select($index)" v-for="cat in list.firstHelpCat"><a :class="{'current': active === $index}" style="margin-left: 0;">{{cat.cname}}</a></li>
        </ul>
    </div>
    <div id="QA">
        <div> 
            <div v-for="article in list.data">
                <div class="articleTitle"  @click="question($index)">
                    {{article.articleTitle}}
                    <i></i>
                </div>
                <div class="articleContent" v-if="activeIndex === $index">
                    {{article.articleContent}}
                </div>
            </div>
        </div>
    </div>  
</div>
</div>
