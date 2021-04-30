import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import user from "./modules/user.js";
import permission from "./modules/permission.js";

const store = new Vuex.Store({
  // 多个模块
  modules: {
    user,
    permission
  }
});

export default store;
