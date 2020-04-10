<template>
  <div id="home">
    <home-top />
    <tab-contral :title="['流行', '新款', '精选']"
                 @clickIndex="clickIndex"
                 v-show="isShowTab" 
                 class="home-tab"
                 ref="tabContral1" />
    <scroll class="scroll"
            :pullUpLoad="true"
            @pullingUp="pullingUp"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <home-swiper :banner="banner" @swiperLoad="swiperLoad"/>
      <home-recommend :recommend="recommend" />
      <home-popular />
      <tab-contral :title="['流行', '新款', '精选']"
                   @clickIndex="clickIndex"
                   ref="tabContral2" />
      <goods-list :goods="showList"/>
    </scroll>
    <back-top v-show="isBackTop" @click.native="clickBackTop"/>
  </div>
</template>

<script>
import HomeTop from './childComps/HomeTop'
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from './childComps/HomeRecommend'
import HomePopular from './childComps/HomePopular'
import TabContral from 'components/content/tabContral/TabContral'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backTop/BackTop'

//网络请求
import { getHomeMultidata, getHomeGood } from "network/home.js";
//方法请求
import { debounce } from 'common/utils'
export default {
  name: "Home",
  components: {
    HomeTop,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    Scroll,
    TabContral,
    GoodsList,
    BackTop
  },

  data() {

    return {
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentGoods: 'pop',
      newRefresh: null,
      isShowTab: false,
      tabContralTopHeight: 0,
      isBackTop: false
    };
  },

  computed: {
    showList() {
      return this.goods[this.currentGoods].list;
    }
  },

  created() {

    //网络请求
   this.getHomeMultidata();
   this.getHomeGood('pop');
   this.getHomeGood('new');
   this.getHomeGood('sell');
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 500)
    this.$bus.$on('imgLoad', () => {
      this.newRefresh();
    })
  },
  methods: {

    clickIndex(index) {
      switch(index) {
        case 0:
          this.currentGoods = 'pop';
          break;
        case 1:
          this.currentGoods = 'new';
          break;
        case 2:
          this.currentGoods = 'sell';
          break;
      }
      this.$refs.tabContral1.currentIndex = index;
      this.$refs.tabContral2.currentIndex = index;
    },
    pullingUp() {
      this.getHomeGood(this.currentGoods)
      this.$refs.scroll.finishPullUp();
    },
    contentScroll(position) {
      this.isShowTab = -(position.y ) > this.tabContralTopHeight;
      this.isBackTop = -(position.y) > 1000;
    },
    swiperLoad() {
      this.tabContralTopHeight = this.$refs.tabContral2.$el.offsetTop;
    },
    clickBackTop() {
      this.$refs.scroll.scrollTo(0, 0, 700);
    },

    getHomeMultidata() {
      getHomeMultidata().then(res => {
        const data = res.data.data;
        this.banner = data.banner.list;
        this.recommend = data.recommend.list;
      });
    },
    getHomeGood(type) {
      const page = this.goods[type].page + 1;
      getHomeGood(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
      })
    }
  }
};
</script>

<style scoped>
  #home {
    /*height: 100vh;*/
  }
  .scroll {
    /*height: calc(100% - 44px - 49px);*/
    /*overflow: hidden;*/
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
  .home-tab {
    position: relative;
  }
</style>
