import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import ItemCard from 'modules/common/ItemCard';
import {CellSwipe, Cell } from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar, ItemCard,
   [CellSwipe.name]: CellSwipe, [Cell.name]: Cell},

  data() {
    return {
        list: [],
        vallist: [],
        show:false,
        edit: {
            show: false
        },
         right: {
          text: '编辑',
          handle: this.showEdit
        }
      };
  },
  computed: {
      allSelected() {
          return this.list.every(item => {
            return item.selected
          })
      },
  },

  methods: {
    showEdit() {
       this.edit.show = !this.edit.show;
       if(this.edit.show){
          this.right.text="完成"; 
        }else{
          this.right.text="编辑";
       }
    },
    select(key, index) {
      console.log(key, index)
      console.log(this.vallist[key][index])
       this.vallist[key][index].isSelected = !this.vallist[key][index].isSelected
    },
    delete(data,id,item) {
        S.user.delbrowseList({browseDate:data,itemId:id}).then(ret => {
          if(ret.status==200){
              console.log("成功");
              this.init();
            }else{
              console.log("错误");
            }
        })
    },
    getSelectItems() {
        let _carts = []
        this.list.forEach(item => {
          if (item.selected) {
              _carts.push(item.itemId)
          }
        })
        return _carts
    },
    delselected(){
        S.user.delbrowseList(this.getSelectItems()).then(ret => {
        if(ret.status==200){
            console.log("成功");
            this.init();
          }else{
            console.log("错误");
          }
      })
    },
    gotoindex(){
      window.sessionStorage.setItem('TAB_SHOW',0);
      this.__gotoPage("index");
    },
    init() {
        S.user.browseList({}).then(ret => {
        if(ret.data.length==0){
          this.right.text="";
        }  
        let _vallist = []
        this.list = ret.data
        for(var key in ret.data){
            if(!_vallist[key]) {
              _vallist[key] = []
            }

            _vallist[key].push(
              ret.data[key].map(item => {
                item.isSelected = false
                return item
              })
            )

        }
        this.vallist = _vallist
        console.log(this.vallist)
      })

    }
  },
  ready() {
    this.init();
  }
});