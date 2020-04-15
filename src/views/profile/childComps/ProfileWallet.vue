<template>
  <div class="pro-wallet">
    <div>
      <p><span>0.00</span>元</p>
      <p>我的余额</p>
    </div>
    <div>
      <p><span>0</span>元</p>
      <p>我的优惠</p>
    </div>
    <div>
      <p><span>0</span>元</p>
      <p>我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileWallet"
  }
</script>

<style scoped>
  .pro-wallet {
    display: flex;
    align-items: center;
    height: 105px;
    font-size: 14px;
    border-bottom: 10px solid #eee;
  }
  .pro-wallet > div {
    flex: 1;
    text-align: center;
  }
  .pro-wallet > div span {
    font-size: 26px;
    color: #f00;
    font-weight: bold;
    margin-right: 8px;
  }
  div:nth-of-type(1),
  div:nth-of-type(2) {
    border-right: 1px solid #ccc;
  }
</style>