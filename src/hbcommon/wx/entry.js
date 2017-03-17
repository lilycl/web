
/**
 * @param App [object] vue组件对象
 * @param Prepares [array] 预加载页面列表
 * @param Opts [object] 入口页配置
 * 
 * @return {Object} 
 *         App: {Object} vue组件对象
 *         entry: {Array} 页面参数集合
 */
function entry (App, Prepares, Opts) {
  return {
    App
  }

}

// export default 里的函数不能写arguments, 因为被编译了, 里面很乱
export default entry;