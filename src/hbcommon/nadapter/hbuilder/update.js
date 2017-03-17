/**
 * 检查应用更新
 * @param appid [int] 传给后端的appid值 北校为2 爱学习为1
 * @param checkUrl [string] 检查更新的地址
 * @return function 更新方法
 */
import ajax from './ajax'
import utils from '../utils'
import page from './page'
import Config from '../../../config'

export default (appid, checkUrl, done) => {
	plus.runtime.getProperty(plus.runtime.appid, function (inf) {
		var wgtVer = inf.version;

		ajax({
			url: checkUrl + '?version=' + wgtVer,
			success: (ret) => {
				if (ret.status && ret.data.forceUpdate === 1) {
					plus.nativeUI.confirm('发现新版本，是否更新', function(e){
            if(e.index == 1){
              downWgt(ret.data.url, done)
            }
          }, '更新提示', ['取消','更新']);
				}
			}
		}, appid)
	})
}

function downWgt(wgtUrl, done) {
	plus.nativeUI.showWaiting("发现新版本，正在下载...");
	plus.downloader.createDownload(wgtUrl, { filename: "_doc/gaosiupdate/" }, function (d, status) {
		if (status == 200) {
			installWgt(d.filename, done);	// 安装文件包
		} else {
			plus.nativeUI.alert("下载文件失败！" + JSON.stringify(status));
		}
		plus.nativeUI.closeWaiting();
	}).start();
}

// 更新应用资源
function installWgt(path, done) {
	plus.nativeUI.showWaiting("正在安装程序...");

	plus.runtime.install(path, { force: true }, function () {
		plus.nativeUI.closeWaiting();
		console.log("安装程序成功！");
		plus.nativeUI.alert("应用资源更新完成，将会重启应用！",function () {
      if(Config.APP_ID == 3){
        //教师端更新
        if (utils.isAndroid) {
            page.open(page.getLaunch());
            page.closeAll();
        } else {
            // ios 执行plugins
            done && done();
        }
      }else{
        //其他端更新
        done && done();
      }
			plus.runtime.restart();
		});
	}, function (e) {
		plus.nativeUI.closeWaiting();
		plus.nativeUI.alert("安装程序失败：" + JSON.stringify(e));
	});
}
