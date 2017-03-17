/**
 * 角色对象
 * @author libaoxu@gaosiedu.com
 * @date 2016-11-26
 */

/**
 * key 是服务端传来的roleName字段, value是前端的字段, 做一层适配
 * 因为服务端方案还没定, 前端先开始埋点,等服务端字段确定了之后, 只需要改这个适配json的key就可以了, 不需要动业务层了
 * @type {Object}
 */
const ROLE_SETTINGS = {
  /**
   * @type {Object}
   * 不可遍历的对象, 如key, superKey,不能进行值覆盖
   * enmurable: {
   *  name {String} 角色名称
   *  key {String} 前端业务层需要的key值
   *  superKey {String} 该角色的父角色
   *  highKey {String} 比该角色高级的角色
   * }
   * curernt {Boolean} 是否为当前角色
   * params {Object} 该角色应有的参数
   * privileges {Array} 后期需要扩展的对应权限
   */
  assistant: {
    id: '',
    current: false,
    enumerable: {
      name: '助教',
      key: 'assistant',
      // 如果页面中有teacher这个更高角色, 那该角色的current会被取消掉
      highKey: 'teacher'
    }
  },

  littleBao: {
    current: false,
    params: {},
    id: '',
    privileges: ['吃饭'],
    enumerable: {
      superKey: 'teacher',
      name: '小宝',
      key: 'littleBao',
    }
  },

  isInWhiteList: {
    id: '',
    current: false,
    enumerable: {
      key: 'whiteList',
      name: '白名单',
      superKey: 'teacher'
    }
  },

  isNovice: {
    id: '',
    current: false,
    enumerable: {
      key: 'isNovice',
      name: '新手'
    }
  },

  teacher: {
    id: '',
    current: false,
    enumerable: {
      name: '教师',
      key: 'teacher'
    }
  }
};

/**
 * 用户端额外的用户信息, 如白名单: isInWhiteList: true, 并没有在user.roles里
 * @type {Array}
 */
const EXTRA_ROLE_KEYS = ['isInWhiteList', 'isNovice'];

/**
 * 角色信息详情操作
 */
let roleManage = {

  roleInfo: null,

  get (user) {

    // 单例
    if (this.roleInfo) return this.roleInfo;

    this.roles = this.getRoles(user);

    this.roleDescriptes = this.getRoleDescriptes();

    this.setRoleSettingsWithDescriptor();

    return this.roleInfo = this.getRoleInfo();
  },

  /**
   * 统一角色信息到同一个roles数组里
   * 
   * @param {Object} user 用户登录的信息
   */
  getRoles (user) {

    let roles = user.roles || [];

    EXTRA_ROLE_KEYS.forEach((roleKey) => {
      if (user[roleKey] === 1 || user[roleKey] === true) {
        roles.push({
          roleName: roleKey
        });
      }
    });    

    return roles;
  },

  /**
   * 获得角色信息的描述对象, 通过Object.defineProperties(obj, this.roleDescriptes); 进行赋值
   * 
   * @returns {Object} 角色对象 {assistant: {id: {value: 123, enumerable: false}, roleName: {}}}
   */
  getRoleDescriptes () {

    /**
     * 角色数组
     * [{"roleName": "teacher", "id": "11"}]
     */
    let roles = this.roles;
    let roleDescriptes = {};

    roles.forEach((item) => {
      
      roleDescriptes[item.roleName] = {};

      for (let key in item) {
        // 有些信息禁止用户更改和遍历
        roleDescriptes[item.roleName][key] = {
          value: item[key],
          enumerable: false
        }
      }
      
    });
    return roleDescriptes;
  },

  /**
   * 获得角色信息详情
   * @returns {Object} 返回给各页面用到的值
   */
  getRoleInfo () {
    let roleMap = {
      __proto__: {}
    };

    let prop;
    let roleKey;
    let roleItem;
    let  _value;
    let roleDescriptor;
    let roleDescriptes = this.roleDescriptes;

    for (prop in ROLE_SETTINGS) {
      roleItem = ROLE_SETTINGS[prop];

      // roleDescriptes, 是根据用户登录信息中提取的, 要用prop
      roleDescriptor = roleDescriptes[prop];

      // roleKey是提供给pages的
      roleKey = roleItem.key;
      
      if (roleDescriptor && typeof roleDescriptor === 'object') {

        /**
         * 如果该角色的更高级角色, 在角色信息描述对象里, 则该角色的current会被取消掉
         */
        _value = roleDescriptes[roleItem.highKey] ? {}: {
          current: true
        };

        let inMapRole = roleMap[roleKey];
        // 如果已经在roleMap里, 不能赋值, 不然地址引用断开, 进行浅拷贝
        if (inMapRole && typeof inMapRole === 'object') {
          Object.assign(inMapRole, this.copyBySuper(roleItem, _value, roleMap));
        } else {
          roleMap[roleKey] = this.copyBySuper(roleItem, _value, roleMap);
        }

        // 赋值: 登录获得的相应角色的描述信息
        Object.defineProperties(roleMap[roleKey], roleDescriptor);
      } else {
        
        roleMap[roleKey] || (roleMap[roleKey] = roleItem);
      }

    }
    return roleMap;
  },

  /**
   * 根据通过递归, 将roleItem 和 ROLE_SETTINGS[roleItem.superKey]依次进行参数混合
   * 
   * @param {Object} roleItem 该角色的信息
   * @param {Object} value 需要混合的值
   * @param {Object} roleMap getRoleInfo()的返回值角色信息需要赋值给(this.roleInfo)
   * @returns {Object} 混合之后的值 {name: '小宝', key: 'littleBao', superKey: 'whiteList, privileges: ['吃饭', '睡觉'], dataList: {}}
   */
  copyBySuper (roleItem, value, roleMap) {
    if (!roleItem) {
      return {};
    }

    let roleKey = roleItem.key;
    let superKey = roleItem.superKey;
    if (superKey) {
      
      if (!roleMap[superKey]) {
        roleMap[superKey] = ROLE_SETTINGS[superKey];
      } 

      let superRole = roleMap[superKey];
      if (superRole) {
        // 混合roleItem, roleItem的父级: superRole, 相应需要更改的value
        // 地址引用 roleMap[superKey]的值也相应更改
        mixValues(superRole, roleItem, value); 

        if (!superRole.superKey) {
          // 返回地址roleItem仍是
          return Object.assign(roleItem, superRole);
        } else {
          // 通过递归, 依次将ROLE_SETTINGS[roleItem.superKey] 进行值拷贝
          return Object.assign(roleItem, this.copyBySuper(superRole, value, roleMap));
        }
      } else {
        return roleItem;
      }
    } else {
      return roleMap[roleKey] = Object.assign(roleItem, value);
    }

  },

  /**
   * 设置ROLE_SETTINGS 里面的属性, 将enumerable等的属性, 直接放到具体的role下, 且设为不可遍历
   * @example   teacher: {enumerable: {name: '教师',key: 'teacher'}, active: true} => teacher: {name: '教师',key: 'teacher', enumerable: {name: '教师',key: 'teacher'}, active: true}}
   */
  setRoleSettingsWithDescriptor () {
    let role;
    let descriptor;
    let enmurableObj;

    for (let key in ROLE_SETTINGS) {
      if (ROLE_SETTINGS.hasOwnProperty(key)) {
        role = ROLE_SETTINGS[key];
        enmurableObj = role.enumerable;

        // 设置不可遍历属性
        if (enmurableObj && typeof enmurableObj === 'object') {
          
          descriptor = {};
          for (let _key in enmurableObj) {
            descriptor[_key] = {
              value: enmurableObj[_key]
            }
          }

          // ROLE_SETTINGS的enumerable属性设置不可遍历
          descriptor.enumerable = {
            value: enmurableObj,
            enumerable: false
          };
          
          Object.defineProperties(role, descriptor);
        } 
      }
    }  
  }

};

/**
 * 所有参数混合到第一个参数上, 普通值或对象进行浅拷贝, 数组合并
 * @return {Object} 混合之后的值
 * @example mixValues({a: ['吃饭']}, {a: ['吃饭'], b:100}, {}) => {a: ['吃饭', '睡觉'], b: 100} 
 */ 
function mixValues (...rest) {
  let i = 1;
  let args = [...rest];
  let length = args.length;
  // 目标值
  let target = args[0] || {};
  let options;
  // 目标值的原对象
  let source;
  // 需要混合的具体对象
  let copy;

  // 循环参数
  for (; i < length; i++) {

    if (options = args[i]) {

      for (name in options) {
        source = target[name];
        copy = options[name];

        // 防止循环引用
        if (source === copy) {
          continue;
        }

        if (Object.prototype.toString.call(copy) === '[object Array]') {
          // 数组不覆盖进行合并
          target[name] = source && source.concat ? source.concat(copy) : copy;
        } else {
          // 其他浅拷贝
          target[name] = copy;
        }
      }

    }

  }

  return target;

}


/**
 * 通过 __proto__ 实现父级属性继承, __proto__.__proto__ 指向父级的__proto__
 * 
 * @param {Object} subObj 需要继承的子对象
 * @param {Object} superKey 继承父级的key名
 * @param {Object} superValue 需要继承具体值
 * @returns {Object} {key: 'whiteList', name: '白名单', ..., __proto__:{teacher: {},  }
 */
function extendProto (subObj, superKey, superValue) {

  // 通过_super属性指向父级地址
  subObj._super = superValue;
  
  // 实现父级的属性继承, __vm__.__roleInfo.littleBao.dataList = __vm__.__roleInfo.teacher.dataList
  subObj.__proto__ = superValue;

  // 在属性上增加父级key名一样的属性,  __vm__.__roleInfo.littleBao._super ===   __vm__.__roleInfo.littleBao.whiteList
  Object.defineProperties(subObj.__proto__, {
    [superKey]: {
      value: superValue
    }
  });

  // 这样通过多一层链, 能直接找到父级的父级,  __vm__.__roleInfo.littleBao.teacher ===   __vm__.__roleInfo.littleBao.whiteList.teacher
  subObj.__proto__.__proto__ = superValue.__proto__;

  return subObj;
}


export default {

  /**
   * 第一次得到数据之后, 将data赋值, 第二次到第n次 从data里面取值
   */
  data: null,

  /**
   * 获得角色对象
   * @param {Object} user 登录的用户详请
   * @return {Object}
   * @example user: {"id":16713,"insId":25,"teacherName":"test", "isNovice":true, "isInWhiteList":true, "roles": [{"roleName": "teacher", "id": "11"}, {"roleName": "assistant", "id": "22"} ]}
   */ 
  get (user) {
    // 先从缓存里取值
    if (this.data) return this.data;

    // 如果没有role. 则默认角色设为老师
    if (!user || !user.roles) return roleManage.get({
      isInWhiteList:true,
      roles: [
        {
          roleName: 'teacher',
          id: user && user.id || ''
        }
      ]
    });

    return this.data = roleManage.get(user);
  }

};