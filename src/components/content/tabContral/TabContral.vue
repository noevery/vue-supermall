<template>
  <div class="tab-contral">
    <div class="title"
         v-for="(item, index) in title"
         :key="index"
         :class="{active: currentIndex === index}"
         @click="clickIndex(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabContral",
    props: {
      title: {
        type: Array,
        default() {
          return []
        }
      }
    },
      data() {
        return {
          currentIndex: 0
        }
      },
    methods: {
      clickIndex(index) {
        this.currentIndex = index;
        this.$emit('clickIndex', index)
      }
    }

  }
</script>

<style scoped>
  .tab-contral {
    display: flex;
    height: 50px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;

    background-color: #fff;
    z-index: 9;
  }
  .title {
    flex: 1;
  }
  .active {
    color: #FF1493;

  }
  .active span {
    display: inline-block;
    line-height: 40px;
    border-bottom: solid 2px #FF1493;
  }
</style>