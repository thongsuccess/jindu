import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import store from "./store/store-module"; // 加上modules
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import axios from "axios";

// Vue.config.productionTip = false
Vue.use(Antd);
// axios.defaults.baseURL = "http://139.196.42.209:5004/api/";
// Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
