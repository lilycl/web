'use strict';
import page from './page';
import utils from '../utils';

export default (callback) => {
    let adjust = false;

    function plusReady() {
        if (!adjust) {
            utils.compatibleAdjust();
            adjust = true;
        }

        setTimeout(() => {
            callback(window.__initData__)
        }, 200)
    }
    
    if (callback && typeof callback === 'function') {
        if (window.plus) {
            plusReady();
        } else {
            document.addEventListener('plusready', plusReady, false);
        }
    }
}