<template>
  <div class="tab-bar-items" @click="activeClick">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItems",
  props: {
    path: String,
    color: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.color } : {};
    }
  },
  methods: {
    activeClick() {
      this.$router.replace(this.path);
    }
  }
};
</script>

<style scoped>
.tab-bar-items {
  width: 100%;
  height: 49px;
  text-align: center;
  flex: 1;
  font-size: 14px;
}
.tab-bar-items img {
  margin-top: 3px;
  width: 24px;
}
</style>
