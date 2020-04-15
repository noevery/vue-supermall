<template>
  <div class="top-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TopBar"
};
</script>

<style scoped>
.top-bar {
  position: relative;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.center {
  flex: 1;
}

.right,
.left {
  width: 60px;
}
</style>
