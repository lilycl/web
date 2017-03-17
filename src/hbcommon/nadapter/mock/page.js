const AT = 'pop-in'
var openw = null;

export default {
    back(hide) {
        if(window.history.length>1){
            window.history.back();
        }else{
            window.close();
        }
    },
    open(id, params) {
        if (params) {
            window.location.href = '/' + id + '.html?params=' + encodeURIComponent(JSON.stringify(params));
        } else {
            window.location.href = '/' + id + '.html';
        }
    },
    close() {

    },
    getCurrent() {
        return {
            close: function() {}
        }
    },
    
    setDebugUrl() {},

    exec() {
        
    },

    prepare() {},
    getLaunch() {},
    immersed() {
        return 0;
    },
    /**
     * 监听页面滚到底部时间
     */
    scrollToBottom(done, capture) {
      window.onscroll = () => {
          if (document.body.scrollTop + window.innerHeight + 5 >= document.body.scrollHeight) {
              done()
          }
      }
    }
}