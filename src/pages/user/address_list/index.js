import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';
import Topbar from 'modules/common/Topbar';
import AddressCard from './AddressCard';
import { CellSwipe,Popup} from 'mint-ui';
import './style.less';
module.exports = entry({
  template: require('./index.tpl'),
  components: { Topbar,AddressCard, 
      [CellSwipe.name]: CellSwipe,
      [Popup.name]: Popup
  },
  data() {
    return {
      list:[],
      edit: {
          show: false
      },
      right: {
        text: '编辑',
        handle: this.showEdit
      },
      selectedNum:0,
      popupVisible: false,
      addrId:0,
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
    select(index){
       this.list[index].selected = !this.list[index].selected;
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
        }else {
          this.list.forEach(item => {
              item.selected = true
          })
        }
    },
    getSelectItems() {
        let _carts = []
        if(this.addrId>0){
          _carts.push(this.addrId)
        }else{
          this.list.forEach(item => {
          if (item.selected) {
              _carts.push(item.addrId)
          }
        })
        }
        return _carts
    },
    confirm(){
      S.user.deladdress(this.getSelectItems()).then(ret => {
        if(ret.status==200){
            this.popupVisible= false
            this.init();
        }else{
          console.log("错误");
        }
      })
    },
    default(){
      this.popupVisible= false
    },
    delete(id) {
        this.popupVisible=true;
        this.addrId =id;
    },
    deleteselected() {
       this.popupVisible=true;
    },
    gotoindex(){
      window.sessionStorage.setItem('TAB_SHOW',0);
      this.__gotoPage("index");
    },
    init() {
      S.user.address().then(ret => {
        if(ret.data.length==0){
          this.right.text="";
          this.edit.show=false
        }
        this.list = ret.data.map(item => {
            item.selected = false
            return item
        })
      });
    }
  },
  ready() {
    this.init();
  }
});