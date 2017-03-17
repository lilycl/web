import entry from 'entry';
import NAPI from 'nadapter';
import S from 'service';

import { Toast ,Popup} from 'mint-ui';

import Topbar from 'modules/common/Topbar';
import CartSkus from 'modules/user/CartSkus';


import './style.less';
const props = {
     show:{
        type: Number,
        default: 0
     },
}
export default {
    template : require('./index.tpl'),
    components : {
        Topbar, CartSkus,
        [Popup.name]: Popup,
    },

    props: props,

    data() {
        return {
            // 购物车列表
            list: [],
            invalidId:[],
            allSelect:false,
            popup:false,
            cartId:0,
            edit: {
                show: false
            },
            num: 0,
            total: 0,
            right: {
                text: '编辑',
                handle: this.showEdit
            },
        }
    },
    computed: {
        allSelected() {
            return this.list.every(item => {
                return item.userCart.every(goods => {
                    return goods.selected
                })
            })
        },
        totalPrice() {
            let _price = 0.00
            
            this.list.forEach(item => {
                item.userCart.forEach(goods => {
                    if(goods.selected) {
                        _price += parseFloat(goods.item.bidPrice*goods.skuNum)
                    }   
                })
            })

            return _price.toFixed(2)
        }
    },

    methods : {
        init() {
            this.refreshCart();
           
        },
        refreshCart() {
           S.user.cart().then(ret => {
                if(ret.data.length == 0){
                    this.right.text = "";
                    this.edit.show = false;
                }
                this.list = ret.data.map(item => {
                    item.userCart.forEach(goods => {
                        goods.selected = false
                    })
                    item.invalidUserCart.forEach(goods => {
                        this.invalidId.push( goods.cartId);
                    })

                    item.parentSelected = false
                    return item
                })
            });
        },

        showEdit() {
           
            this.edit.show = !this.edit.show;

            if(this.edit.show){

                this.right.text="完成"; 
            }else{

                this.right.text="编辑";
            }
        },
        checkClick(index, childIndex) {
            this.list[index].userCart[childIndex].selected = !this.list[index].userCart[childIndex].selected
            this.list[index].parentSelected = this.isParentSelected(index)
        },
        
        checkClickAll(index) {
            const isChildSelectAll = this.isParentSelected(index)
            this.list[index].userCart = this.list[index].userCart.map(cart => {
                cart.selected = !isChildSelectAll
                return cart
            })
            this.list[index].parentSelected = !isChildSelectAll
        },
        isParentSelected(index) {
            return this.list[index].userCart.filter(cart => {
                return cart.selected
            }).length === this.list[index].userCart.length
        },
        selectAll() {

            this.allSelect = this.allSelected;
            this.list.forEach(item => {
                 item.userCart.forEach(goods => {
                    goods.selected = !this.allSelect;
                })
                item.parentSelected = !this.allSelect; 
            })
        },
        getSelectItems() {
            let _carts = [];
            if(this.cartId>0){
                _carts.push( this.cartId);
            }else{
                this.list.forEach(item => {
                item.userCart.forEach(goods=>{
                    if (goods.selected) {
                        _carts.push( goods.cartId);
                    }
                })
             })
            }
            return _carts;
        },
        getwishItems() {
            let _wishes = [];
            this.list.forEach(item => {
                item.userCart.forEach(goods=>{
                    if (goods.selected) {
                        _wishes.push({cartId:goods.cartId,itemId:goods.itemId,status:1});
                    }
                })
            })
            return _wishes;
        },
        deleteOne(id,item) {
            this.popup= true;
            this.cartId=id;
        },
        confirm(){
            S.user.delcart(this.getSelectItems()).then(ret => {
              if(ret.status==200){
                  this.popup= false
                  this.refreshCart();
                }else{
                  Toast("错误");
                }
            })
        },
        default(){
            this.popup= false
        },
        delete() {
            this.popup= true;
            
        },
        addWishlist(){
             S.user.postwishList(this.getwishItems()).then(ret => {
              
              if(ret.status==200){
                  console.log("成功");
                  this.init();
                }else{
                  console.log("错误");
                }
            })
        },
        delInvalidGoods(){
            S.user.delcart(this.invalidId).then(ret => {
              if(ret.status==200){
                  console.log("成功");
                  this.init();
                  
                }else{
                  console.log("错误");
                }
            })
        }
    },
    ready() {
        this.init();
    }
};