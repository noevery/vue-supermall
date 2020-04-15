<template>
  <div>
    <top-bar class="top-bar">
      <div slot="center" >购物车({{length}})</div>
    </top-bar>
  </div>
</template>

<script>
  import TopBar from 'components/common/topBar/TopBar'
  export default {
    name: "CartBar",
    components: {
      TopBar
    },
    props: {
      length: {
        type: Number,
        default() {
          return 0
        }
      }
    }
  }
</script>

<style scoped>
  .top-bar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>