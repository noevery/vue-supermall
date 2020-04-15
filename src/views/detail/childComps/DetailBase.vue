<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base-info">
    <div class="info-title">{{baseInfo.title}}</div>
    <div class="info-price">
      <span class="n-price">{{baseInfo.newPrice}}</span>
      <span class="o-price">{{baseInfo.oldPrice}}</span>
      <span v-if="baseInfo.discount" class="discount">{{baseInfo.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{baseInfo.columns[0]}}</span>
      <span>{{baseInfo.columns[1]}}</span>
      <span>{{baseInfo.services[baseInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in baseInfo.services.length-1" :key="index">
        <img :src="baseInfo.services[index-1].icon">
        <span>{{baseInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBase",
    props: {
      baseInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .info-title {
    padding: 10px;
    color: #000;
  }
  .info-price {
    padding: 10px;
  }
  .n-price {
    font-size: 30px;
    color: var(--color-tint)
  }
  .o-price {
    vertical-align: 1px;
    padding-left: 5px;
    font-size: 14px;
    text-decoration: line-through;
  }
  .discount {
    padding: 2px 5px;
    margin-left: 5px;
    color: #fff;
    background-color: var(--color-tint);
    border-radius: 10px;
    font-size: 12px;
    position: relative;
    top: -10px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: 12px;
    border-bottom: 1px solid #eee;
  }
  .info-service {
    display: flex;
    line-height: 60px;
    justify-content: space-between;
    font-size: 12px;
    color: #000;
  }
  .info-service img {
    width: 14px;
    position: relative;
    vertical-align: -2px;
  }
</style>