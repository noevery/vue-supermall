<template>
  <div class="cate-right">
    <div v-for="(item, index) in shopDetailList"
         :key="index" class="list">
      <a :href="item.link">
        <img :src="item.image" alt="" class="rightImg">
        <span>{{item.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>

  export default {
    name: "CategoryRight",
    components: {

    },
    props: {
      shopDetailList: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .cate-right {
    display: flex;
    flex-wrap: wrap;
    height: calc(100% - 44px - 49px);
    font-size: 14px;
  }
  .list {
    width: 25%;
    margin: 10px;
    padding: 5px;
    text-align: center;
  }
  .rightImg {
    width: 100%;
  }
</style>