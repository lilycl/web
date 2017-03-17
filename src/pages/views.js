/**
 * hbuilder入口html页面配置
 *
 * 配置参考
 * module.exports = {
 *  demo: {
 *    title: '爱学习-测试页面',
 *    noheader: [boolean], 加载页面时不显示默认头
 *    notchecklogin: [boolean], true为进行登录检查
 *    preventexit: [boolean] true为禁止直接退出应用
 *    nobackevent: [boolean] true为不自动监听返回事件
 *  }
 * }
 */

module.exports = {
    index: {
        title: '首页',
        noheader: true,
        preventexit: true
    },
    detail: {
        title: '详情页',
        noheader: true,
        preventexit: true
    }
}

