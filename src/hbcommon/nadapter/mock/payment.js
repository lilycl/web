export default {
  getChannels(cb) {
    cb([{
      id: 'alipay'
    },{
      id: 'wxpay'
    }]);
  },
  request(payId, order, cb) {
    window.location.href = "https://openapi.alipay.com/gateway.do?" + order;
    cb(payId);
  }
};
