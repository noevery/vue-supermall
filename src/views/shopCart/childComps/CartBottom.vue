<template>
  <div class="cart-bottom">
      <check-button
              :is-check="isCheck"
              class="left-btn"
              @click.native="clickCheckAll"/>
      <span class="checkAll">反选</span>
      <span class="total">合计：{{totalPrice}}</span>
      <span class="calc">计算：{{calcNum}}</span>
  </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottom",
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters([
        'cartLength',
        'cartList'
      ]),
      isCheck() {
        if(this.cartLength === 0)  return false;
        return !this.cartList.find(item => !item.checked)
      },
      totalPrice() {
        return '￥' + this.cartList.filter(item => item.checked)
                        .reduce((price, item) => {
                          return (price + item.count * item.price)
                        }, 0).toFixed(2)
      },
      calcNum() {
        return this.cartList.filter(item => item.checked).length
      }
    },
    methods: {
      clickCheckAll() {
        for (let item of this.cartList) {
          if(item.checked === true) {
            item.checked = false;
          }else {
            item.checked = true;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    display: flex;
    align-items: center;
    position: relative;
    bottom: 40px;
    left: 0;
    height: 40px;
    background-color: #eee;
    align-items: center;
  }
  .left-btn {
    width: 20px;
    margin: 0 7px;
  }
  .total {
    margin-left: 70px;
    flex: 1;
  }
  .calc {
    width: 80px;
    line-height: 40px;
    text-align: center;
    background-color: var(--color-tint);
  }
</style>