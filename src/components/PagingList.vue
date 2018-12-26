<template>
  <div class="paging-list">
    <pull-to
      @infinite-scroll="loadmore"
      :top-load-method="refresh"
      @scroll="scrollEvet">
      <div class="list">
        <slot name="item" v-for="item in dataList" :item="item">
          {{item}}
        </slot>
      </div>
      <div class="loading-bar">
        加载中...
      </div>
    </pull-to>
  </div>
</template>
<script>
import common from '@/common/common'
export default {
  name: 'PagingList',
  props:{
    url:{ //请求接口路径
      type:String,
      default:''
    },
    pageSize:{ //每页加载数据量
      type:Number,
      default:0
    },
    loadDistance:{ //距离底部x距离时开始加载
      type:Number,
      default:0
    }
  },
  data() {
    return {
      dataList:[],
      loadding:false,//加载中
      startNum:0,
      isFresh:false,//是否是下拉刷新页面
    };
  },
  created(){
    // new VConsole();
    this.getList();
  },
  methods: {
    loadmore(){
      if(!this.loadDistance){
        this.getList();
      }
    },
    getList(loaded){
      console.log(this.url);
      if(this.loadding){ //请求数据时不允许再次发送请求
        return
      }
      if(this.url){
        let params = { startNum: this.startNum }
        if(this.pageSize){
          params = { ...params, ...{ pageSize: this.pageSize } }
        }
        this.loadding = true;
        common.ajax({
          url: this.url,
          data: params
        }).then(res=>{
          this.loadding = false;
          if(res.code===1000){
            this.startNum = res.data.startNum||this.startNum;
            if(this.isFresh){ //若是刷新则重置list
              this.dataList = [];
            }
            let list = res.data.list;
            this.dataList = this.dataList.concat(list||[]);
            loaded && loaded('done');
          } else {
            loaded && loaded('fail');
          }
          this.isFresh = false;
        })
      }
    },
    //下拉刷新
    refresh(loaded){
      this.startNum = 0;
      this.isFresh = true;
      this.getList(loaded);
    },
    //滚动事件调用
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
.paging-list {
  position: relative;
  width: 100%;
  height: 100%;
  color: #333;
  font-size: 24px;
  .loading-bar {
    height: 80px;
    text-align: center;
    line-height: 80px;
  }
}
</style>
