<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-items path="/home" color="deeppink">
        <img slot="img" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="img-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="text">首页</div>
      </tab-bar-items>
      <tab-bar-items path="/category" color="deeppink">
        <img slot="img" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="img-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="text">分类</div>
      </tab-bar-items>
      <tab-bar-items path="shopcart" color="deeppink" >
        <img slot="img" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="img-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="text">购物车</div>
      </tab-bar-items>
      <tab-bar-items path="profile" color="deeppink">
        <img slot="img" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="img-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="text">我的</div>
      </tab-bar-items>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItems from "components/common/tabbar/TabBarItems";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItems
  }
};
</script>

<style scoped></style>
