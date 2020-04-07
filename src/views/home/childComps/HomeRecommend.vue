<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Home-recommend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    width: 100%;
    display: flex;
    padding: 10px 0 20px;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }
  .item {
    flex: 1;
    text-align: center;
    padding: 0 10px;
  }
  .item img {
    width: 100%;
  }
</style>