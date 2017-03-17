import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import { Cell,Toast ,Popup} from 'mint-ui';
import Topbar from 'modules/common/Topbar';
import ItemRemove from 'modules/common/ItemRemove';
import './style.less';

module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar, ItemRemove,[Popup.name]: Popup},

  data() {
    return {
        list: [],
        show:false,
        edit: {
            show: false
        },
        right: {
          text: '编辑',
          handle: this.showEdit
        },
       selectedNum:0,
       popupVisible: false,
       itemId:0,
        
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
    checkClick(index,item) {
      this.list[index].selected = !this.list[index].selected
      if( this.list[index].selected){
        this.selectedNum += 1
      }else{
        this.selectedNum -= 1
      }
    },
    
    selectAll() {

        if (this.allSelected) {

            this.list.forEach(item => {
                item.selected = false
            })
        } else {
           this.list.forEach(item => {
                item.selected = true
            })
        }
    },
   
    getSelectItems() {
            let _carts = []
            if(this.itemId>0){
              _carts.push( this.itemId)
            }else{
              this.list.forEach(item => {
                
              if (item.selected) {
                  _carts.push( item.itemId)
              }
              })
            }
            return _carts
        },
      deleteItem(id) {
        this.popupVisible= true
        this.itemId=id;
      },
      confirm(){
         S.user.delwishList(this.getSelectItems()).then(ret => {
          if(ret.status==200){
              this.popupVisible= false
              this.init()
            }else{
              Toast("错误");
            }
        })
       },
      default(){
       this.popupVisible= false
      },
    init() {
        S.user.wishList({}).then(ret => {
          if(ret.data.length==0){
              this.right.text="";
              this.edit.show=false;
          }
          this.list = ret.data.map(item => {
            item.selected = false
            return item
          })
        }).catch(err => {

        });
      },
  },
  ready() {
    this.init();
  }
});