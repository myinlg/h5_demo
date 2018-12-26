<template>
  <div class="buy">
    <PagingList url="/api/product/selectAppSaleTopItem">
      <template slot="item" slot-scope="props">
        <GoodsItem :goodsInfo="props.item"></GoodsItem>
      </template>
    </PagingList>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer'
import GoodsItem from '@/components/GoodsItem'
import PagingList from '@/components/PagingList'
export default {
  name:'buy',
  components:{
    Footer,
    GoodsItem,
    PagingList
  },
  data(){
    return {}
  },
  created(){
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.buy {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  padding-bottom: 100px;
  .goods-item {
    display: inline-block;
    background-color: #fff;
    border-bottom: 10px solid #f5f5f5;
    &:nth-child(2n + 1) {
      border-right: 8px solid #f5f5f5;
    }
  }
}
</style>
