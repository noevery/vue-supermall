import {
  ADD_COUNT,
  ADD_To_CART,
}
  from './types'

export default {
  [ADD_COUNT](state, oldPlayLoad) {
    oldPlayLoad.count++;
  },
  [ADD_To_CART](state, playLoad) {
    playLoad.checked = false;
    state.cartList.push(playLoad);
  }
}