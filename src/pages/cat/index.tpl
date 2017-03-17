<div class=" base-tab" id="cat-tab">
  <ul class="clear" style="width:130px;margin:0 auto;">
    <li @click="select(101)"><a :class="{'current': active === 101}">男子</a></li>
    <li @click="select(102)"><a :class="{'current': active === 102}">女子</a></li>
   <!--  <li @click="select(103)"><a :class="{'current': active === 103}">男童</a></li>
    <li @click="select(104)"><a :class="{'current': active === 104}">女童</a></li> -->
  </ul>
</div>
<div class="clear cat-nav">
  <div class="nav-left">
    <ul class="clear">
      <li @click="selects($index,cat.cid,cat.cname,cat.catIcon)" v-for="cat in catList"><a :class="{'current': actives === $index}">{{cat.cname}}</a></li>
    </ul>
  </div>
  <div :style="{'height': containerHeight}" class="cat-main">
    <h2><img src="{{catIcon}}"/> {{catName}}</h2>
    <div class="cat-detail">
      <div class="item" v-for="cats in catLevel">
        <div class="li-img"><img src="{{cats.catIcon}}" /></div>
        <p class="p0">{{cats.cname}}</p>
      </div>
    </div>
  </div>
</div>