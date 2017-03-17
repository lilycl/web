/**
 * hbuilder应用更新本地服务器
 */
var path = require('path')
var express = require('express')
var jsonfile = require('jsonfile')
var utils = require('../utils')
var datapath = __dirname + '/version.json'

var app = express()

var port = '8089'
var host = 'localhost'

// 开启服务
function startServer () {
  updatePackage()
  createPackage()

  app.listen(port, function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('Listening at http://'+ utils.getIpV4() +':' + port + '\n')
  })
}

// 获取安装包
function updatePackage () {
  app.get('/checkverion', function(req, res){
    
    var checkversion = jsonfile.readFileSync(datapath).filter(function(item) {
       return item.isonline
    })[0]
    
    console.log(checkversion.version)

    res.json({
      update: checkversion && checkversion.version !== req.query.version,
      updateUrl: 'http://' + utils.getIpV4() + ':' + port + '/getpackage/' + checkversion.version + '.wgt'
    });
  })

  app.get('/getpackage/:version', function(req, res){
    res.sendFile(req.params.version, {root: __dirname + '/packages/'})
  })
}

// 创建压缩包
function createPackage () {
  app.get('/createpackage', function(req, res){
    res.sendFile('index.html', {root: __dirname})
  })

  app.get('/getpackagelist', function(req, res){
    res.json(jsonfile.readFileSync(datapath))
  })

  app.post('/createpackage/:version', function(req, res){
    res.send('user ' + req.params.version);
  })
}

startServer()