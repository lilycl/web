module.exports = {
  'getDetail': {
    data: {
      name: '阿迪达斯男鞋三叶草经典休闲鞋',
      origPrice: 320,
      price: 230,
      left: 9,
      logi:'免费',
      desc: '时尚 透气 轻便 性价比高  三色可选',
      shopImg: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG",
      itemImg: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG',
      itemSubImgs: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG',
      text: '时尚 透气 轻便 性价比高  三色可选时尚 透气 轻便 性价比高  三色可选时尚 透气 轻便 性价比高  三色可选时尚 透气 轻便 性价比高  三色可选时尚 透气 轻便 性价比高  三色可选时尚 透气 轻便 性价比高  三色可选',
      shopDesc: '阿迪达斯（adidas）是德国运动用品制造商，阿迪达斯AG的成员公司。',
      shopName: '店铺名',
      count: '3小时29分30秒',
      stock:'5'
    },
    errorCode:'',
    message:'',
    status: 1
  },

  'getCommentList': {
    data: [
      {
        name: '大一巴',
        datetime: '2016-10-16　20:18:00',
        desc: '四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用',
        color: 1,
        picList:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG',
        userImg:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG'
      },
      {
        name: '大二巴',
        datetime: '2016-10-16　20:18:00',
        desc: '四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用',
        color: 2,
        picList:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG',
        userImg:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG'
      },
      {
        name: '大三巴',
        datetime: '2016-10-16　20:18:00',
        desc: '四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用四月的中的忘记晒单了 用了一段时间 好用的很 支持蓝牙方便了许多 电池很赖用',
        color: 3,
        picList:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG',
        userImg:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=768140322,1049546329&fm=80&w=179&h=119&img.PNG'
      }
    ],
    errorCode:'',
    message:'',
    status: 1
  },
   'getCartGoods': {
    data: [{
      name: '中国联通 电话充值卡面值30元',
      price: 230,
      left: 9,
      desc: '男款42码  米色电话充值',
    
    },
   
    ],
    errorCode:'',
    message:'',
    status: 1
  },

   'getmyList':{
    data: [{
         shopName: "小米旗舰店", /*店铺名*/
         shopImg: "http://img.alicdn.com/tps/i4/TB12mhwHVXXXXctXVXXAAT2HVXX-63-63.png ", /*店铺logo*/
         shopId:"13411899017", /*店铺id*/
         orderStatus : "1",   /*订单状态*/
         end_time : "2016-01-01 15:50:23", /*剩余支付时间*/
         itemNum : "2",     /*合计商品数量 */
         price:"750.00",     /*支付金额*/    
         fare: "10.00",       /*运费*/
         itemData:[{
            itemName:"iphone手机",    /* 商品名称*/
            itemId:"21231",            /* 商品id*/
            sku:"颜色：黑色；尺码：39", /*商品sku*/ 
            itemImg:" http://img.alicdn.com/tps/i4/TB12mhwHVXXXXctXVXXAAT2HVXX-63-63.png ", /*商品图片*/
            origPrice:"777.00", /*商品原价*/
            currPrice:"666.00", /*商品现价*/
            tagName:"七天退换"/*商品标签*/

          } 
         ]
       
          
     }
    ],
    errorCode:'',
    message:'',
    status: 1
  }

}
