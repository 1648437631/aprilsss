import Vue from "vue";
import Vuex from "vuex";
import adminApi from '@/http/apis/AdminApi'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    // 默认情况下，用户未登录，需在登录后，修改对象数据
    // nickname: JSON.parse(localStorage.getItem('nickName')),
    avatar: localStorage.getItem("avatar"),
    nickname: localStorage.getItem("nickname"),
    sex: localStorage.getItem("sex"),
    birthday: localStorage.getItem("birthday"),
  },
  getters: {},
  mutations: {
    // 为了数据持久化保存，还需要向storage中存一份
    // 保存token
    saveToken (state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    // 更新state值
    updateUser (state, user) {
      state.avatar = user.avatar;
      state.nickname = user.nickname;
      state.sex = user.sex;
      state.birthday = user.birthday;
    },
  },
  actions: {
    initVuex (context) {
      return new Promise(async (resolve, reject) => {
        if (context.state.avatar) {
          resolve()
          return
        }
        try {
          const res = await adminApi.queryUserInfo()
          context.commit('updateUser', res)
        } catch (err) {
        }
      })
    }
  }
});