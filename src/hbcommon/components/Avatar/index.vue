
<template>
  <div 
    class="comp-head-pic" 
    :style="{width: width}"
    :name="name"
  >
    <img src="./default_avatar.png" v-if="!name && (!imgUrl || imgUrl === 'http://image.aixuexi.com/default.jpg')" @error="getDefault" />
    <img src="./default_avatar_teacher.png" v-if="name === 'teacher' && (!imgUrl || imgUrl === 'http://image.aixuexi.com/default.jpg')" @error="getTeacherDefault" />
    <img :src="imgUrl" v-if="imgUrl && imgUrl != 'http://image.aixuexi.com/default.jpg'" @error="getDefault" />
  </div>
</template>

<script>
import defaultAvatar from './default_avatar.png'
import teacherDefaultAvatar from './default_avatar_teacher.png'

const props = {

  /**
   * 图片宽度
   */
  width: {
    type: String,
    default: '30px'
  },

  /**
   * 图片路径
   */
  imgUrl: {
    type: String
  },

  /**
   * 默认图片名称
   * 教师端：teacher
   */
  name: {
    type: String
  }
}

/**
 * 头像组件 
 * 生成单个头像或者头像组合
 */
export default {
  props: props,
  methods: {
    getDefault(e) {
      e.target.setAttribute('src', defaultAvatar)
    },
    getTeacherDefault(e) {
      e.target.setAttribute('src', teacherDefaultAvatar)
    }
  }
};
</script>
<style scoped>
  .comp-head-pic{
    width:30px;
    display: inline-block;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>