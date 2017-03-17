export default (Vue) => {
  /**
   * 截取字符串长度
   * text | cuttext '4'
   */
  Vue.filter('cuttext', function (value) {
    if (value.length > 4) {
      return value.substr(0, 4) + '..'
    }

    return value
  });

  Vue.filter('sex', function (value) {
    
    if(value == "m") {
      return "男";
    } else if(value == "f"){
      return "女";
    }else{
      return "保密";
    }
  });
}
