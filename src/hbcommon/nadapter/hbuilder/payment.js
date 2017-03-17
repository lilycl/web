/**
 * 支付api
 */

export default {
  getChannels(cb) {
    window.plus.payment.getChannels(cb);
  },

  request(payId, order, res, rej) {
    window.plus.payment.request(payId, order, res, rej);
  }
};
