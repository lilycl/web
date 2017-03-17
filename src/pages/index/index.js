import entry from 'entry'
import NAPI from 'nadapter'
import S from 'service'

import BottomBar from 'modules/index/BottomBar'

import Main from './main'
import cat from   '../cat'
import cart from '../user/cart'
import person_info from '../user/person_info'
import Empty from 'modules/index/Empty'
import BottomCart from 'modules/user/BottomCart'
import './style.less'

module.exports = entry({
  template: require('./index.tpl'),

  components: {
    BottomBar,
    Main,
    cat,
    cart,
    person_info,
    Empty
  },

  porps: ['px'],

  data() {
    return {
      
      activeTab: window.sessionStorage.getItem('TAB_SHOW')/1 || this.__getPageData().active || 0 ,
     
    }
  },

  methods: {
    tabTo({id, index}) {
      this.activeTab = index
      window.sessionStorage.setItem('TAB_SHOW', index)
    }

  },
  ready() {
  }
})