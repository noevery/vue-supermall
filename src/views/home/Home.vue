<template>
  <div id="home">
    <home-top />
    <home-swiper :banner="banner" />
    <home-recommend :recommend="recommend" />
    <home-popular />
    <ul>
      <li>我是列表1个</li>
      <li>我是列表2个</li>
      <li>我是列表3个</li>
      <li>我是列表4个</li>
      <li>我是列表5个</li>
      <li>我是列表6个</li>
      <li>我是列表7个</li>
      <li>我是列表8个</li>
      <li>我是列表9个</li>
      <li>我是列表10个</li>
      <li>我是列表11个</li>
      <li>我是列表12个</li>
      <li>我是列表13个</li>
      <li>我是列表14个</li>
      <li>我是列表15个</li>
      <li>我是列表16个</li>
      <li>我是列表17个</li>
      <li>我是列表18个</li>
      <li>我是列表19个</li>
      <li>我是列表20个</li>
      <li>我是列表21个</li>
      <li>我是列表22个</li>
      <li>我是列表23个</li>
      <li>我是列表24个</li>
      <li>我是列表25个</li>
      <li>我是列表26个</li>
      <li>我是列表27个</li>
      <li>我是列表28个</li>
      <li>我是列表29个</li>
      <li>我是列表30个</li>
    </ul>
  </div>
</template>

<script>
import HomeTop from './childComps/HomeTop'
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from './childComps/HomeRecommend'
import HomePopular from './childComps/HomePopular'

//网络请求
import { getHomeData } from "network/home.js";
export default {
  name: "Home",
  components: {
    HomeTop,
    HomeSwiper,
    HomeRecommend,
    HomePopular
  },
  data() {
    return {
      banner: [],
      recommend: []
    };
  },
  created() {
    //网络请求
   this.getHomeData()
  },
  methods: {
    getHomeData() {
      getHomeData().then(res => {
        console.log(res);
        const data = res.data.data;
        this.banner = data.banner.list;
        this.recommend = data.recommend.list;
      });
    }
  }
};
</script>

<style scoped>

</style>
