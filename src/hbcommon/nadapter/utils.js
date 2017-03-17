/**
 * native api adapter 公共函数
 * */
export default {

    getUserAgent () {
        return navigator.userAgent;
    },

    isHB () {
        return this.getUserAgent().match(/Html5Plus/i);
    },

    isAndroid: !navigator.userAgent.match(/iPhone/i),

    isWx: navigator.userAgent.match(/MicroMessenger/i),
    // isWx: true,

    obj2Hash (params) {
        var items = [];
        for (let item in params){
            items.push(item + '=' + encodeURIComponent(params[item]));
        }
        return items.join('&');
    },

    getQueryParams () {
        let result = {}

        if(location.search !== ""){
            let queryArray = location.search.substr(1).split("&")

            queryArray.forEach( item => {
                let itemArray = item.split("=")
                result[itemArray[0]] = itemArray[1]
            })
        }

        return result
    },

    getPageName () {
        return location.href.match(/\/(\w*).html/i)[1]
    },
    
    compatibleAdjust(){
        var dcontent = document.getElementById('dcontent');
        var content = document.getElementById('content');
        var lasto = window.orientation;
        dcontent && (dcontent.className = 'sdcontent');
        content && (content.className = 'scontent');

        //iOS8横竖屏切换div不更新滚动问题
        window.addEventListener('orientationchange',function(){
            var nowo = window.orientation;
            if(lasto!== nowo && (90 === nowo || -90 === nowo)){
                dcontent && (0 === dcontent.scrollTop) && (dcontent.scrollTop = 1);
                content && (0 === content.scrollTop) && (content.scrollTop = 1);
            }
            lasto = nowo;
        },false);
    },

    /**
     * 获取cookie 
     * @param key 健值
     * @param str cookie值 若不传则取浏览器中的cookie
     */
    getCookie(key, str) {
        if (!str) {
            str = document.cookie
        }

        let c_start = 0;
        let c_end = 0;

        if (str.length>0) {
            c_start=str.indexOf(key + "=")
            
            if (c_start!=-1) { 
                c_start=c_start + key.length+1 
                c_end=str.indexOf(";",c_start)

                if (c_end==-1) c_end=str.length

                return unescape(str.substring(c_start,c_end))
            }
        }

        return null
    },

    /**
     * 判断是否是空对象
     * @param {Object} obj
     */
    isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	}
}