<template>
  <div class="bottom-nav">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div @click="isActive">
        <i class="icon select" v-if="iconShow"></i>
        <i class="icon active-select" v-else></i>
        <span class="text">{{selectMessage}}</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    data() {
      return {
        iconShow: true,
        selectMessage: '收藏'
      }
    },
    methods: {
      isActive() {
        this.iconShow = !this.iconShow;
        if(!this.iconShow) {
          this.selectMessage = '已收藏'
        }else {
          this.selectMessage = '收藏'
        }
      },
      addToCart() {
        this.$emit('addToCart');
      }
    }
  }
</script>

<style scoped>
  .bottom-nav {
    height: 49px;
    position: relative;
    background-color: #fff;
    z-index: 999;
    bottom: 0;
    /*bottom: 49px;*/
    display: flex;
    text-align: center;
  }
  .bar-item {
    flex: 1;
    display: flex;
  }
  .bar-item > div {
    flex: 1;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position: 0 -54px;
  }
  .bar-left .active-select {
    background-position: 0 -26px;
  }
  .bar-left .shop {
    background-position: 0 -98px;
  }
  .bar-right {
    font-size: 15px;
    color: #fff;
    line-height: 56px;
  }
  .bar-right .cart {
    background-color: #ffe817;
  }
  .buy {
    background-color: rgb(255,120,153);
  }
</style>