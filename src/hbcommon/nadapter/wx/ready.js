'use strict';
import page from './page';
import utils from '../utils';

let domready = false;

export default (callback) => {
  let adjust = false;
  let params = utils.getQueryParams().params

  function plusReady() {

    if (!adjust) {
      utils.compatibleAdjust();
    }
    document.body.onselectstart = utils.shield;
    callback(params ? JSON.parse(decodeURIComponent(params)) : {});
    domready = true;
    adjust = true;
  }

  if (callback && typeof callback === 'function') {
    if (domready) {
      plusReady();
    } else {
      document.addEventListener('DOMContentLoaded', plusReady, false);
    }
  }
}