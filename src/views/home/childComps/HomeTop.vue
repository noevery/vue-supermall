<template>
  <div>
    <top-bar class="top-bar">
      <div slot="center">购物街</div>
    </top-bar>
  </div>
</template>

<script>
  import TopBar from "components/common/topBar/TopBar";
  export default {
    name: "Home-top",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .top-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>