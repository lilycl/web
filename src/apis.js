import nutils from 'nadapter/utils';

let host = 'prod'; 

const CONFIG = {
    prod: 'http://127.0.0.1'
}

const REQ_TYPE = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DEL: 'DELETE'
}

const API_URL = nutils.isHB() ? CONFIG[host] + '/api/' : '/api/';

const get = getCurryUrl(API_URL, REQ_TYPE.GET);
const post = getCurryUrl(API_URL, REQ_TYPE.POST);
const put = getCurryUrl(API_URL, REQ_TYPE.PUT);
const del = getCurryUrl(API_URL, REQ_TYPE.DEL);
/**
 * 是否自动更新
 */
const AUTO_LOADING = true;
const AUTO_ERROR = true;

export default {
    order: {

        getDetail: get('item', AUTO_LOADING),
        getCartGoods: get('order/getCartGoods', AUTO_LOADING), 
        getCommentList: get('item/comment', AUTO_LOADING),
        getmyList: get('order/getmyList', AUTO_LOADING),
        
    },
     item: {
        itemsku: get('item/sku', AUTO_LOADING),
        getvendor:get('item/vendor', AUTO_LOADING),
        vendoritems:get('item/vendorByPage', AUTO_LOADING),
        shopcoupon:get('shop/coupon', AUTO_LOADING),
        receivecoupon:post('shop/coupon', AUTO_LOADING),
        
    },
    vendor:{
        vendordetail:get('vendor/infoForItem', AUTO_LOADING),
    },

    user: {
        cart: get('user/cart', AUTO_LOADING),
        delcart: del('user/cart', AUTO_LOADING),

        
        newaddress:post('user/address',AUTO_LOADING),
        address:get('user/address',AUTO_LOADING),
        deladdress:del('user/address', AUTO_LOADING),
        uInfo: get('user/home', AUTO_LOADING),
        getInfo: get('user/info', AUTO_LOADING),
        putInfo: put('user/info', AUTO_LOADING),
        getcoupon: get('user/coupon', AUTO_LOADING),
        wishList: get('user/wish', AUTO_LOADING),
        postwishList:post('user/wish', AUTO_LOADING),
        delwishList: del('user/wish', AUTO_LOADING),
        browseList: get('user/browseList', AUTO_LOADING),
        delbrowseList: del('user/browseList', AUTO_LOADING),

        help: get('help/cat?platformId=1', AUTO_LOADING),
        helpcat:get('help/catId', AUTO_LOADING),
        
        send: post('user/sendMsg', AUTO_LOADING),
        bind: post('user/bindMobile', AUTO_LOADING),
        feedback: post('user/feedback', AUTO_LOADING),
        CommentList: get('user/comment', AUTO_LOADING),

    },
    myOrder: {
        orderList: get('myOrder/orderList', AUTO_LOADING), 
    },
    collect: {
        myCollect: get('collect/myCollect', AUTO_LOADING), 
    },
    records: {
        myRecords: get('records/myRecords', AUTO_LOADING), 
    },
    cat: {
        cat: get('cat', AUTO_LOADING), 
        catLevel : get('cat/level',AUTO_LOADING),
    }
    
}

/**
 * 生成请求对象
 */
function getCurryUrl (url, reqType, contentType) {
    return (urlName, loading) => {
        return {
            url: url + urlName,
            type: reqType,
            contentType: contentType,
            loading: loading || false,
            callback: (ret)=>{//ret.status == 0 && ret.errorCode == 'G_10002'
                
            }
        }
    }
}

