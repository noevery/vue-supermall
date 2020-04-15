<template>
  <div id="shop-cart">
    <cart-bar :length="length"/>
    <cart-list class="cart-list" />
    <cart-bottom/>
  </div>
</template>

<script>
import CartBar from "./childComps/CartBar";
import CartList from "./childComps/CartList"
import CartBottom from "./childComps/CartBottom"

import {mapGetters} from 'vuex'

export default {
  name: "ShopCart",
  components: {
    CartBar,
    CartList,
    CartBottom
  },
  computed: {
    ...mapGetters({
      length: 'cartLength'
    })
  }
};
</script>

<style scoped>
  #shop-cart {
    height: 100vh;
  }
  .cart-list {
    height: calc(100% - 44px - 49px);
  }
</style>
