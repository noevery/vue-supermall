<template>
  <div id="detail">
    <detail-top-bar ref="topBar"
                    @clickCurrentIndex="clickCurrentIndex"/>
    <scroll class="detail-scroll"
            :probe-type="3"
            ref="scroll"
            @scroll="contentScroll">
      <detail-swiper :topImg="topImg" />
      <detail-base :baseInfo="baseInfo" />
      <detail-shop-info :shop="shop" />
      <detail-detail-info :detailInfo="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info :paramInfo="paramInfo" ref="detParamInfo"/>
      <detail-commentInfo :commentInfo="commentInfo" ref="detCommentInfo"/>
      <detail-good-list :goods="recommendList" ref="detRecommendList"/>
    </scroll>
    <detail-bottom-bar class="detail-bottom-bar" @addToCart="addToCart" />
    <back-top v-show="isShowBackTop" @click.native="clickBackTop" />
  </div>
</template>

<script>
  import DetailTopBar from './childComps/DetailTopBar'
  import Scroll from 'components/common/scroll/Scroll'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBase from './childComps/DetailBase'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailDetailInfo from './childComps/DetailDetailInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailGoodList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import BackTop from 'components/common/backTop/BackTop'

  import {debounce} from 'common/utils'
  //混入
  import {newRefreshMixin} from "common/mixin";

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components: {
      DetailTopBar,
      Scroll,
      DetailSwiper,
      DetailBase,
      DetailShopInfo,
      DetailDetailInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailGoodList,
      DetailBottomBar,
      BackTop
    },
    mixins: [newRefreshMixin],
    data() {
      return {
        iid: null,
        topImg: [],
        baseInfo: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommendList: [],
        getTitileTops: null,
        titleTopYs: [],
        currentIndex: 0,
        isShowBackTop: false
      }
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {

        const data = res.data.result;
        //获取轮播图图片
        this.topImg = data.itemInfo.topImages;
        //获取商品信息
        this.baseInfo = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //获取店铺信息对象
        this.shop = new Shop(data.shopInfo);
        //保存商品的详情数据
        this.detailInfo = data.detailInfo;
        //  获取参数的信息
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
        // 获取评论数据
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
      });
      //推荐商品
      getRecommend().then(res => {
        this.recommendList = res.data.data.list;
      });
    },
    mounted() {
      //  获取主题的各个高度
      this.getTitileTops = debounce(() => {
        this.titleTopYs = [];
        this.titleTopYs.push(0);
        this.titleTopYs.push(this.$refs.detParamInfo.$el.offsetTop);
        this.titleTopYs.push(this.$refs.detCommentInfo.$el.offsetTop);
        this.titleTopYs.push(this.$refs.detRecommendList.$el.offsetTop);
        this.titleTopYs.push(Number.MAX_VALUE);
      }, 300);
      this.getTitileTops();
    },
    methods: {
      ...mapActions(['addCart']),
      contentScroll(position) {
        let positionY = - position.y;
        let length = this.titleTopYs.length;
        for (let i = 0; i < length - 1; i++) {
          if (this.currentIndex !== i && (positionY >= this.titleTopYs[i] - 44) && positionY < this.titleTopYs[i + 1] - 44) {
            this.currentIndex = i;
            this.$refs.topBar.currentIndex = this.currentIndex;
          }
        }
        this.isShowBackTop = positionY > 1500;
      },
      clickCurrentIndex(index) {
        this.$refs.scroll.scrollTo(0, -this.titleTopYs[index] + 44, 700);
      },
      imageLoad() {
        this.newRefresh()
      },
      clickBackTop() {
        this.$refs.scroll.scrollTo(0, 0, 700);
      },
      addToCart() {
        const product = {};
        product.image = this.topImg[0];
        product.title = this.baseInfo.title;
        product.desc = this.baseInfo.desc;
        product.price = this.baseInfo.realPrice;
        product.iid = this.iid;

        this.addCart(product).then(res => {
          this.$mytoast.toastShow(res, 1000);
        })
      }
    },
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
  }
  .detail-scroll {
    height: calc(100% - 44px - 49px);
  }
  .detail-bottom-bar {

  }
</style>