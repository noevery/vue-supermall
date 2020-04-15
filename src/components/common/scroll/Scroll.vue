<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Scroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      pullUpLoad: {
        type: Boolean,
        default() {
          return false;
        }
      },
      probeType: {
        type: Number,
        default() {
          return 0
        }
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new Scroll(this.$refs.wrapper, {
        click: true,
        pullUpLoad: this.pullUpLoad,
        probeType: this.probeType
      });
    //  上拉加载更多
      this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
      });
     //  滚动检测距离
      this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position);
       })
    },
    methods: {
      finishPullUp() {
        this.scroll.finishPullUp();
      },
      refresh() {
        this.scroll.refresh();
      },
      scrollTo(x, y, time=300) {
        this.scroll.scrollTo(x, y, time);
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    overflow: hidden;
  }
</style>