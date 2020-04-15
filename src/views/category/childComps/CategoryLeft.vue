<template>
    <scroll class="category-left">
      <ul>
        <li v-for="(item, index) in shopList"
            :key="item.maitKey"
            :class="{active: currentIndex === index}"
            @click="clickCurrentIndex(index)">
              {{item.title}}
        </li>
      </ul>
    </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "CategoryLeft",
    components: {
      Scroll
    },
    props: {
      shopList: {
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
      clickCurrentIndex(index) {
        this.currentIndex = index;
        this.$emit('clickLeftIndex', index)
      }
    }
  }
</script>

<style scoped>
  .category-left {
    float: left;
    width: 100px;
    height: calc(100% - 44px - 49px);
    background-color: #eee;
  }
  ul > li {
    text-align: center;
    font-size: 14px;
    padding: 15px;
    box-sizing: border-box;
  }
  .active {
    border-left: 3px solid var(--color-tint);
    color: var(--color-tint);
    background-color: #fff;
    font-weight: bold;
  }
</style>