import utils from '../utils'
import roleInfo from '../roleInfo'
import srcConfig from 'src/config'

const GAOSI_USER = "GAOSI_USER"
const GAOSI_USER_TOKEN = "GAOSI_USER_TOKEN"

export default {

  /**
   * 保存用户账号信息
   */
  save(user) {
    if (typeof user === 'string') {
      user = JSON.parse(user)
    }

    /**
     * 1 不存在
     * 2 空对象
     * 3 非教师端情况, 且 没有用户id
     * 以上三种不存储
     */
    if (
      !user
      || utils.isEmptyObject(user) 
      || srcConfig.APP_SCHEME !== 'teacher' && !user.id
    ) {
      return false
    }

    window.localStorage.setItem(GAOSI_USER, JSON.stringify(user))
  },

  /**
   * 获取用户信息
   */
  get() {
    try{
      let _userInfo = window.localStorage.getItem(GAOSI_USER)

      if (_userInfo) {
        return JSON.parse(_userInfo)
      }
      return null
    }catch(e){
      return null
    }
  },

  /**
   * 获取用户code
   */
  getCode() {
    return this.get().code
  },

  /**
   * 获取教师用户code
   */
  getTeacherCode() {
    return this.get().id
  },

  /**
   * 获取用户机构code
   */
  getInsCode() {
    return this.get().insId
  },

  /**
   * 清空用户数据
   */
  clear() {
    window.localStorage.clear(GAOSI_USER)
    window.localStorage.clear(GAOSI_USER_TOKEN)
  },

  /**
   * 设置用户token
   */
  setToken(token) {
    window.localStorage.setItem(GAOSI_USER_TOKEN, token)
  },

  /**
   * 得到用户token
   */
  getToken() {
    return window.localStorage.getItem(GAOSI_USER_TOKEN) || ''
  },
  
  /**
   * 获取用户设备唯一标示
   */
  getClientInfo() {
    if(window.plus){
      return window.plus.push.getClientInfo();
    }
    return window.localStorage.getItem(GAOSI_USER_TOKEN) || null
  },

  /**
   * 教师端 获取用户信息
   * 
   * 同步方法 返回用户信息
   */
  getLoginInfo() {
    return window.plus.bridge.execSync('plugingaosi', 'getLoginInfo', []);
  },

  /**
   * 获得角色信息
   * 注意: 依赖this.getLoginInfo, 需要在NAPI.ready之后使用
   */
  getRoleInfo () {
    // 先从roleInfo的缓存的里取值, 如果没有再传参数获取get
    return roleInfo.get(this.getLoginInfo());
  }
}