import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import toast from 'components/common/toast'

import Fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;

//事件总线
Vue.prototype.$bus = new Vue();
//toast的使用
Vue.use(toast);

//fastclick使用
Fastclick.attach(document.body);
//vue-lazyload使用
Vue.use(VueLazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
