export default {
  // 设置程序快捷方式上显示的提示数字
  setBadgeNumber(num) {
    plus.runtime.setBadgeNumber(num);
  },
  // 清空程序快捷方式上显示的提示数字
  clearBadge() {
    plus.runtime.setBadgeNumber(0);
  },
  // 应用版本号
  version() {
    return plus.runtime.version;
  }
};