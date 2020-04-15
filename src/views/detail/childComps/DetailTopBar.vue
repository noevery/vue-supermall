<template>
  <div id="detail-top-bar">
    <top-bar>
      <div slot="left"
           class="left" @click="clickBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item, index) in title"
           :key="index"
             class="item"
             :class="{active: currentIndex === index}"
             @click=clickCurrentIndex(index)>{{item}}</div>
      </div>
    </top-bar>
  </div>
</template>

<script>
  import TopBar from 'components/common/topBar/TopBar'
  export default {
    name: "DetailNavBar",
    components: {
      TopBar
    },
    data() {
      return {
        title: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      clickCurrentIndex(index) {
        this.currentIndex = index
        this.$emit('clickCurrentIndex', index)
      },
      clickBack() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .center {
    display: flex;
  }
  .item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
  }
  .left {
    padding-top: 5px;
  }
</style>