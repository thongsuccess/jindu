import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  perVal: 100,
  arr: [3,0, 0, 1, 2, 1, 2]
};
const getters = {
  tarPerVal(state) {
    return state.perVal * 145;
  },
  unRep(state) {
    // return Array.from(new Set(state.arr));
    // return [...new Set(state.arr)];
    var array = [];
    for (var i = 0; i < state.arr.length; i++) {
      // 检测数组中是否有某个值
      if (!array.includes(state.arr[i])) {
        array.push(state.arr[i]);
      }
    }
    return array;
    /* 
    当前元素，在原数组中的第一个索引===当前索引值，否则返回当前元素
    return state.arr.filter((item, idx) => {
      return state.arr.indexOf(item, 0) === idx;
    }); */
    /*
    新建一个结果数组，for循环原数组，判断结果组数是否存在当前元素，相同则跳过，否则就push进去
    var temp = [];
    for (var i = 0; i < state.arr.length; i++) {
      if (temp.indexOf(state.arr[i]) === -1) {
        temp.push(state.arr[i]);
      }
    }
    return temp; */
  }
};
const mutations = {
  editPerVal(state) {
    state.perVal++;
  }
};
const actions = {
  changeEditPerVal({ commit }) {
    commit("editPerVal");
  }
};

export default {
  name: "permission",
  namespaced: true, //如果vuex模块化需要加上这个属性
  state,
  getters,
  mutations,
  actions
};
