/**
 * @author zyh
 * 应用容器 
 * 
 * 提供无线滚动的能力
 */
import './index.postcss'

const props = {
    /**
     * 扩展样式
     * */
    extstyle: {
        type: String
    },

    /**
     * 样式名
     * */
    className: {
        type: String,
        default: ""
    },

    /**
     * 是否无限滚动
     * */
    infite: {
        type: String
    },

    /**
     * 背景颜色
     * */
    bgcolor: {
        type: String,
        default: 'none'
    }
}

const events = {
    /**
     * 无线滚动事件 
     */
    INFITE: "infite",

    /**
     * window窗口resize事件 
     */
    RESIZE: "resize"
}

export default {

    template: require('./index.tpl'),

    props: props,

    ready () {

        window.addEventListener("resize", () => {
            this.$dispatch(events.RESIZE)
        })

        if (typeof this.infite !== "undefined") {
            window.onscroll = () => {
                if (document.body.scrollTop + window.innerHeight + 5 >= document.body.scrollHeight) {
                    this.$dispatch(events.INFITE)
                }
            }
        }

    },

    methods: {
        scroll (){

        }
    }

}
