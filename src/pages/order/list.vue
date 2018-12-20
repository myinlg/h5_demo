<template>
  <div class="list-demo">
    <pull-to
      @infinite-scroll="loadmore"
      :top-load-method="refresh"
      @scroll="scrollEvet">
      <ul class="list">
        <li v-for="(item,index) in dataList" :key="index">
          {{ item }}
        </li>
      </ul>
      <div class="loading-bar">
        <svg class="icon icon-loading"
            aria-hidden="true">
          <use xlink:href="#icon-loading"></use>
        </svg>
        加载中...
      </div>
    </pull-to>
  </div>
</template>
<script>
  export default {
    name: 'infinite-scroll',
    props:{
      loadDistance:{
        type:Number,
        default:0
      }
    },
    data() {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ],
        iconLink: '',
        loadding:false,//加载中
      };
    },
    created(){
      new VConsole();
    },
    methods: {
      loadmore(){
        if(!this.loadDistance){
          this.getMore();
        }
      },
      getMore() {
        this.loadding = true;
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList);
          this.loadding = false;
        }, 500);
      },
      refresh(loaded){
        setTimeout(() => {
          this.dataList = [
            '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
            'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
            '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
            '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
          ]
          loaded && loaded('done');
        }, 500);
        // loaded && loaded('fail');
      },
      scrollEvet(el){
        if(!this.loadDistance){
          return;
        }
        let scrollTop = el.target.scrollTop;
        let scrollHeight = el.target.scrollHeight;
        let clientHeight = el.target.clientHeight;
        let isBottom = (clientHeight + scrollTop + this.loadDistance) >= scrollHeight;
        if(isBottom&&!this.loadding){
          this.getMore();
        }
      }
    }
  };
</script>
<style scoped lang="scss">
.list-demo {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: #333;
  font-size: 24px;
}
ul {
  list-style: none;
  padding: 0;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.list {
  font-size: 32px;

  li:nth-child(even) {
    background: #eee;
  }

  li {
    padding-left: 30px;
    height: 100px;
    line-height: 100px;
    background: #fff;

    a {
      display: block;
      height: 100%;
    }

    .icon-arrow {
      display: inline-block;
      float: right;
      margin-right: 30px;
      height: 100%;
      width: 40px;
      color: #444;
    }
  }
}
.loading-bar {
  height: 80px;
  text-align: center;
  line-height: 80px;
}

.icon-loading {
  transform: rotate(0deg);
  animation-name: loading;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
