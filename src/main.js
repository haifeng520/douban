import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

// 引入样式文件
import './stylesheets/mine.less';

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
