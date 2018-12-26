<template>
  <div class="goods-item">
    <div class="goods-img">
      <img :src="goodsInfo.mainIcon" alt="">
      <div v-if="goodsInfo.putaway||!goodsInfo.saleStatu" class="disabled">
        {{goodsInfo.putaway?'下架':(!goodsInfo.saleStatu?'售罄':'')}}
      </div>
    </div>
    <div class="goods-title line-clamp2">
      {{goodsInfo.itemTitle}}
    </div>
    <div class="goods-price">
       ￥{{goodsInfo.salePrice}}
      <div class="cart-button">
          <img src="./img/cart@2x.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'GoodsItem',
  props: {
    goodsInfo: {
      type: Object,
      default: () => {}
    },
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.goods-item {
  position: relative;
  width: 50%;
  height: 460px;
  padding: 40px 30px 0px;
  overflow: hidden;
  .goods-img {
    position: relative;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
      z-index: 10;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
    }
    .disabled {
      position: relative;
      font-size: 32px;
      width: 180px;
      height: 180px;
      line-height: 180px;
      text-align: center;
      color: #fff;
      z-index: 2;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.35);
    }
  }
  .goods-title {
    height: 80px;
    font-size: 26px;
    color: #333;
  }
  .goods-price {
    position: relative;
    height: 60px;
    line-height: 60px;
    color: #ff3030;
    font-size: 30px;
    .cart-button {
      width: 45px;
      height: 45px;
      position: absolute;
      right: 0px;
      top: 8px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
