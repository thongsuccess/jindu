import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
const state = {};
const getters = {}
const mutations = {};
const actions = {}; 

*/

export default new Vuex.Store({
  //数据源
  state: {
    num: 1000
  },
  // store中的计算属性
  getters: {
    GetNum(state) {
      return state.num * 2;
    }
  },
  // 改变state的值
  mutations: {
    add(state) {
      state.num++;
    },
    del(state) {
      state.num--;
    }
  },
  // 管理或提交mutations
  actions: {
    ADD(context) {
      context.commit("add");
    },
    DEL({ commit }) {
      commit("del");
    }
  },
  modules: {}
});
