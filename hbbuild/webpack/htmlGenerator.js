'use strict'

var fs = require('fs')
var path = require('path')
var config = require('../config')

var htmlGenerator = function (update) {
    var r = [];
    var HtmlWebpackPlugin = require('html-webpack-plugin');
    var views = config.views;

    for (var key in views) {
        var re = new RegExp("(.{" + key.lastIndexOf('/') + "})");
        var jsFile = key.replace(re, 'src/pages/$1');

        var conf = {
            filename: key + '.html',
            template: path.join(__dirname, './template.ejs'),
            inject: 'body',
            chunks: [jsFile],
            minify: { removeAttributeQuotes: true, minifyJS: true, minifyCSS: true, removeComments: true },
            params: Object.assign({id: key, update: update, env: process.env.NODE_ENV}, views[key])
        }

        r.push(new HtmlWebpackPlugin(conf));
    }

    return r;
};

module.exports = htmlGenerator;