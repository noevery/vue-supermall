<template>
  <div class="pro-top-bar">
    <top-bar>
      <div slot="center">个人信息</div>
    </top-bar>
  </div>
</template>

<script>
  import TopBar from 'components/common/topBar/TopBar'
  export default {
    name: "ProfileTopBar",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  .pro-top-bar {
    height: 44px;
    color: #fff;
    background-color: var(--color-tint);
  }
</style>