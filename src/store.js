import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      phone:'未登录'
  },
  getters:{

  },
  mutations: {    //改变state  不能有异步操作
      changeLogin(state,status){
        state.phone = status
      }
  },
  actions: {   //处理异步操作  通过mutations改变state值
    loginAction({commit},user){
      commit('changeLogin',user);
    }
  },
});
