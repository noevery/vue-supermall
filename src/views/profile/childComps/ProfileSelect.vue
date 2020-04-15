<template>
  <div class="pro-select">
    <div class="select-item">
      <i class="iconfont">&#xe61f;</i>
      <span>我的消息</span>
    </div>
    <div class="select-item">
      <i class="iconfont">&#xe61e;</i>
      <span>积分商城</span>
    </div>
    <div class="select-item item-bb">
      <i class="iconfont">&#xe6b8;</i>
      <span>会员卡</span>
    </div>
    <div class="select-item">
      <i class="iconfont">&#xe633;</i>
      <span>我的购物车</span>
    </div>
    <div class="select-item">
      <i class="iconfont">&#xe60c;</i>
      <span>点赞购物APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileSelect"
  }
</script>

<style scoped>
  .select-item {
    display: flex;
    align-items: center;
    height: 45px;
    padding-left: 20px;
  }
  .select-item > i {
    font-size: 24px;
  }
  .select-item > span {
    width: 100%;
    height: 45px;
    margin-left: 15px;
    padding: 15px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .item-bb {
    height: 45px;
    padding: 28px 18px;
    border-bottom: 10px solid #eee;
  }
  .item-bb > span {
    border: 0;
    margin-left: 11px;
  }
  .item-bb > i {
    font-size: 30px;
  }
</style>