/**
 * 应用统计接口
 */
import customConfig from '../../../config'

export default {
  /**
   * 发送统计数据
   * @param id 统计埋点id
   * @param label [object] 统计描述
   */
  send(id, label) {
    if(customConfig.APP_SCHEME !== 'teacher' && window.plus.statistic){
      window.plus.statistic.eventTrig(id, JSON.stringify(label))
    }
  }
}