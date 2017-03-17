/**
 * 初始化路由配置
 */

import routes from '../../routes'
import Config from '../../config';
import NAPI from 'nadapter';

export default (router) => {
  /**
   * 1 映射路由
   */
  router.map(routes)

  /**
   * 2 入口的钩子
   */
  router.beforeEach(function (transition) {
    /**
     * 路由信息
     */
    let routerInfo = transition.to;

    if (false) {
      NAPI.page.open('login')
    }
    
    transition.next();
  })

}