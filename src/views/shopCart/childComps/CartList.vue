<template>
  <scroll>
    <cart-list-item v-for="(item, index) in cartList"
                    :item-info="item"
                    :key="index"/>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  import CartListItem from './CartListItem'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>

</style>