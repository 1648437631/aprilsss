import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token'), 
  },
  getters: {
  },
  mutations: {
        // 为了数据持久化保存，还需要向storage中存一份
// 保存token
saveToken(state,token){
  state.token = token
localStorage.setItem('token',token)
}
  },
  actions: {
  },
  modules: {
  }
})
