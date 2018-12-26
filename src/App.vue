<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      startY:0,//开始手指触摸的Y坐标
      endY:0,//滑动时手指触摸的Y坐标
      isDropDown:false, //是否下拉操作
    }
  },
  methods: {
    // 某些元素可以滚动的方法
    overscroll (el){
      el.addEventListener('touchstart', (e)=> {
        this.startY =  e.touches[0].pageY;
        let top = el.scrollTop
        console.log(this.startY,this.endY,top);
        let totalScroll = el.scrollHeight
        let currentScroll = top + el.offsetHeight
        if(top === 0) {
          // if(this.endY-this.startY>0) //手指下滑
            el.scrollTop = 1;
            console.log('手指下拉')
        }else if(currentScroll === totalScroll) {
          el.scrollTop = top - 1;
        }
      })
      el.addEventListener('touchmove', (evt)=> {
        this.endY = evt.changedTouches[0].pageY;
        console.log(this.endY );
        if(el.offsetHeight < el.scrollHeight){
          evt._isScroller = true
        }
      })
    },
    // 监听事件方法
    hiddentPrevent (evt) {
      if (!evt._isScroller) {
        evt.preventDefault()
      }
    }
  },
  mounted () {
    // let vConsole = new VConsole(); // 初始化
    // let scrollEle = document.querySelector('.scroll-wrap')
    // console.log(scrollEle);
    //   this.overscroll(scrollEle) // 让class为scroll的部分有默认滚动事件
    //   document.body.addEventListener('touchmove',function(evt) {
    //   if (!evt._isScroller) {
    //       evt.preventDefault()
    //   }
    // }, {passive: false})
  },
  destroyed () {
    // 销毁时移除监听
    // document.body.removeEventListener('touchstart', this.hiddentPrevent(), {passive: false})
    // document.body.removeEventListener('touchmove', this.hiddentPrevent(), {passive: false})
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  position: relative;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  color: #2c3e50;
}

@font-face {
  font-family: 'iconfont'; /* project id 345287 */
  src: url('//at.alicdn.com/t/font_345287_54zy9eg9tp47k3xr.eot');
  src: url('//at.alicdn.com/t/font_345287_54zy9eg9tp47k3xr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_345287_54zy9eg9tp47k3xr.woff') format('woff'),
    url('//at.alicdn.com/t/font_345287_54zy9eg9tp47k3xr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_345287_54zy9eg9tp47k3xr.svg#iconfont') format('svg');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
