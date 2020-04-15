<template>
  <div id="category">
    <category-top-bar />
    <category-left :shop-list="shopList"
                   @clickLeftIndex="clickLeftIndex"/>
    <scroll class="right-scroll">
      <category-right :shopDetailList="shopDetailList" />
    </scroll>
  </div>
</template>

<script>
  import CategoryTopBar from './childComps/CategoryTopBar'
  import CategoryLeft from './childComps/CategoryLeft'
  import Scroll from 'components/common/scroll/Scroll'
  import CategoryRight from './childComps/CategoryRight'

  import {getCategory, getSubcategory} from 'network/category'

export default {
  name: "Category",
  components: {
    CategoryTopBar,
    CategoryLeft,
    CategoryRight,
    Scroll
  },
  data() {
    return {
      shopList: [],
      shopDetailList: [],
      lastIndex: 0
    }
  },
  created() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      getCategory().then(res => {
        this.shopList = res.data.data.category.list;
        // console.log(this.shopList);
        this.getSubcategory(this.shopList[0].maitKey);
      })
    },
    getSubcategory(maitKey) {
      getSubcategory(maitKey).then(res => {
        this.shopDetailList = res.data.data.list;
        console.log('-----');
      })
    },
    clickLeftIndex(index) {
      if(!(index === this.lastIndex)) {
        this.getSubcategory(this.shopList[index].maitKey);
        this.lastIndex = index;
      }
    }
  },
};
</script>

<style scoped>
  #category {
    height: 100vh;
  }
  .right-scroll {
    height: calc(100% - 44px - 49px);
  }
</style>
