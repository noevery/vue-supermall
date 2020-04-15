<template>
  <div class="cate-top-bar">
    <top-bar>
      <div slot="center">商品分类</div>
    </top-bar>
  </div>
</template>

<script>
  import TopBar from 'components/common/topBar/TopBar'
  export default {
    name: "CategoryTopBar",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .cate-top-bar {
    color: #fff;
    background-color: var(--color-tint);
  }
</style>