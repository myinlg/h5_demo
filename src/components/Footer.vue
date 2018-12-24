<template>
  <div class="footer">
    <div class="item" v-for="(item,index) in footerList" :key="index">
      <div>
        <!-- <img v-if="$route.name === 'index'" src="./img/fuwu.png" alt=""> -->
        <img :src="item.imgUrl" alt="">
        <p :class="{ 'active' : $route.name === 'index'}">服务</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'',
  data(){
    return {
      footerList:[
        { imgUrl:require('./img/fuwu1.png'),activeImgUrl:require('./img/fuwu.png'),text:'服务',routerName:'index' },
        { imgUrl:require('./img/buy1.png'),activeImgUrl:require('./img/buy.png'),text:'购物',routerName:'index' },
        { imgUrl:require('./img/youhui1.png'),activeImgUrl:require('./img/youhui.png'),text:'优惠',routerName:'index' },
        { imgUrl:require('./img/gouwuche1.png'),activeImgUrl:require('./img/gouwuche.png'),text:'购物车',routerName:'index' },
        { imgUrl:require('./img/my1.png'),activeImgUrl:require('./img/my.png'),text:'我的',routerName:'index' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  width: 100%;
  height: calc(104px + env(safe-area-inset-bottom));
  min-height: 104px;
  background-color: #fff;
  bottom: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  box-shadow: 0px -8px 8px rgba(202, 202, 202, 0.5);
  .item {
    position: relative;
    flex: 1;
    height: 104px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 46px;
    height: 46px;
    display: block;
    margin: 0 auto;
  }
  p {
    font-size: 24px;
    color: rgba(81, 81, 81, 1);
    margin-top: 10px;
    line-height: 1;
    &.active {
      color: #ff3030;
    }
  }
}
</style>
