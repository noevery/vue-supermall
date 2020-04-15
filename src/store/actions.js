import {
  ADD_COUNT,
  ADD_To_CART
}
  from './types'

export default {
  addCart(context, playLoad) {
    return new Promise((resolve, reject) => {
      let oldPlayLoad = context.state.cartList.find(item => item.iid === playLoad.iid);
      if (oldPlayLoad) {
        context.commit(ADD_COUNT, oldPlayLoad);
        resolve('当前商品数量+1')
      }else {
        playLoad.count = 1;
        context.commit(ADD_To_CART, playLoad);
        resolve('添加成功')
      }
      reject('添加失败');
      let list = JSON.parse(localStorage.getItem("cartList")) || [];
      for (let item in list) {
        context.state.cartList.push(item);
      }
    });
  }
}