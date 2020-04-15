import {debounce} from './utils'

export const newRefreshMixin = {
  data() {
    return {
      newRefresh: null
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500);
    this.$bus.$on('imgLoad', () => {
      this.newRefresh();
    })
  }
}