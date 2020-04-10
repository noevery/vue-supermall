<template>
  <div class="goods-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt=""
           class="img"
           @load="imgLoad">
    </a>
    <p class="title">{{goodsItem.title}}</p>
    <div class="total">
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imgLoad')
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    width: 48%;
    height: 100%;
    font-size: 14px;
  }
  .total {
    text-align: center;
  }
  .img {
    width: 100%;
    border-radius: 5px;
  }
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .price {
    color: #f00;
  }
  .cfav {
    margin-left: 30px;
    position: relative;
  }
  .cfav::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>