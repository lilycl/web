var path = require('path');
var fs = require('fs');
var glob = require('glob');
var config = require('../config');

function getEntry(hotMiddlewareScript) {
    var pattern = config.devpath + '/pages/*/index.js';
    var array = glob.sync(pattern);
    var newObj = {};

    array.map(function(el){
        var reg = new RegExp('pages/(.*)/index.js','g');
        reg.test(el);
        if (hotMiddlewareScript) {
        	newObj[RegExp.$1] = [el, hotMiddlewareScript];
        } else {
        	newObj[RegExp.$1] = el;
        }
    });
    
    return newObj;
}

module.exports = getEntry