/**
 * 微信单页应用路由配置
 */

module.exports = {
  '/': {
    title: "首页",
    name: "index",
    component: require('./pages/index').App
  },
  '/item_detail': {
    title: "详情页",
    name: "item_detail",
    component: require('./pages/item/item_detail').App
  },
  '/comment_list': {
    title: "我的评价晒单",
    name: "comment_list",
    component: require('./pages/user/comment_list').App
  },
  '/comment_all': {
    title: "全部评论",
    name: "comment_all",
    component: require('./pages/item/comment_all').App
  },
  '/message_list': {
    title: "消息",
    name: "message_list",
    component: require('./pages/user/message_list').App
  },
  '/message_detail': {
    title: "消息",
    name: "message_detail",
    component: require('./pages/user/message_list/message_detail').App
  },
  '/message_detail_content': {
    title: "消息详情",
    name: "message_detail_content",
    component: require('./pages/user/message_list/message_detail_content').App
  },
  '/about': {
    title: "关于我们",
    name: "about",
    component: require('./pages/user/about').App
  },
  
  '/logistics': {
    title: "物流",
    name: "logistics",
    component: require('./pages/item/logistics').App
  },
  '/refund_logistics': {
    title: "物流信息",
    name: "refund_logistics",
    component: require('./pages/user/refund_logistics').App
  },
  '/vendor': {
    title: "商家页面",
    name: "vendor",
    component: require('./pages/item/vendor').App
  },
  '/vendor_detail': {
    title: "商家详情",
    name: "vendor_detail",
    component: require('./pages/item/vendor_detail').App
  },
  '/login': {
    title: "登录",
    name: "login",
    component: require('./pages/user/login').App
  },
  '/register': {
    title: "注册",
    name: "register",
    component: require('./pages/user/register').App
  },
  '/reset_password': {
    title: "修改密码",
    name: "reset_password",
    component: require('./pages/user/reset_password').App
  },
  '/browse_record': {
    title: "浏览记录",
    name: "browse_record",
    component: require('./pages/user/browse_record').App
  },
  '/wish_list': {
    title: "我的收藏",
    name: "wish_list",
    component: require('./pages/user/wish_list').App
  },
  '/refund_aftersale': {
    title: "退款售后",
    name: "refund_aftersale",
    component: require('./pages/user/refund_aftersale').App
  },
  '/refund_consult': {
    title: "协商详情",
    name: "refund_consult",
    component: require('./pages/user/refund_consult').App
  },
  '/refund_detail': {
    title: "退款详情",
    name: "refund_detail",
    component: require('./pages/user/refund_detail').App
  },
  '/refund_apply': {
    title: "申请退款",
    name: "refund_apply",
    component: require('./pages/user/refund_apply').App
  },
  '/refund_to': {
    title: "退款去向",
    name: "refund_to",
    component: require('./pages/user/refund_to').App
  },
  '/apply_service': {
    title: "申请客服介入",
    name: "apply_service",
    component: require('./pages/user/apply_service').App
  },
  '/apply_exchange': {
    title: "申请换货",
    name: "apply_exchange",
    component: require('./pages/user/apply_exchange').App
  },
  '/apply_fix': {
    title: "申请维修",
    name: "apply_fix",
    component: require('./pages/user/apply_fix').App
  },
  '/order_list': {
    title: "我的订单",
    name: "order_list",
    component: require('./pages/user/order_list').App
  },
  '/order_detail': {
    title: "订单详情",
    name: "order_detail",
    component: require('./pages/user/order_detail').App
  },
  '/new_address': {
    title: "新增地址",
    name: "new_address",
    component: require('./pages/user/new_address').App
  },
 
  '/person_info': {
    title: "个人中心",
    name: "person_info",
    component: require('./pages/user/person_info').App
  },
  '/user_info': {
    title: "个人资料",
    name: "user_info",
    component: require('./pages/user/user_info').App
  },
  '/coupon': {
    title: "优惠券",
    name: "coupon",
    component: require('./pages/user/coupon').App
  },
 
  '/comment': {
    title: "评价晒单",
    name: "comment",
    component: require('./pages/user/comment').App
  },
  '/feedback': {
    title: "意见反馈",
    name: "feedback",
    component: require('./pages/user/feedback').App
  },
  '/help': {
    title: "帮助中心",
    name: "help",
    component: require('./pages/user/help').App
  },
  '/address_list': {
    title: "地址管理",
    name: "address_list",
    component: require('./pages/user/address_list').App
  },
  '/account_bind': {
    title: "账号绑定",
    name: "account_bind",
    component: require('./pages/user/account_bind').App
  },
  '/account_security': {
    title: "账号安全",
    name: "account_security",
    component: require('./pages/user/account_security').App
  },
  '/unbind_mobile': {
    title: "解绑手机号",
    name: "unbind_mobile",
    component: require('./pages/user/unbind_mobile').App
  },
  '/bind_mobile': {
    title: "绑定手机号",
    name: "bind_mobile",
    component: require('./pages/user/bind_mobile').App
  },
  '/confirm_order': {
    title: "订单",
    name: "confirm_order",
    component: require('./pages/user/cart/confirm_order').App
  },
  '/cart_merge': {
    title: "凑单",
    name: "cart_merge",
    component: require('./pages/user/cart/cart_merge').App
  },
   '/list': {
    title: "列表页",
    name: "list",
    component: require('./pages/index/list').App
  },
  '/activity': {
    title: "场景页",
    name: "activity",
    component: require('./pages/index/activity').App
  },
  '/invoice': {
    title: "发票信息",
    name: "invoice",
    component: require('./pages/user/cart/invoice').App
  },
  '/e-invoice': {
    title: "电子发票",
    name: "e-invoice",
    component: require('./pages/user/e-invoice').App
  },
};