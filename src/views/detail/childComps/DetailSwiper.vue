<template>
  <swiper>
    <swiper-item v-for="(item, index) in topImg"
                 :key="index"
                 class="itemImg">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImg: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .itemImg {
    width: 100%;
    height: 300px;
  }
</style>