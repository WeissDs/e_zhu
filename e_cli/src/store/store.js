import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 为什么 store 不存在啊啊啊啊啊好气啊！！！！！！
const store = new Vuex.Store({
  state: {
    satr: 'false'
  },
  mutations: {
    show (star) {
      star = true
    },
    close (star) {
      star = false
    }
  }
})

export default store
