import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 为什么 store 不存在啊啊啊啊啊好气啊！！！！！！
const store = new Vuex.Store({
  state: {
    star: false
  },
  mutations: {
    show (state) {
      state.star = true
    },
    close (state) {
      state.star = false
    }
  }
})

store.commit('show')
console.log(store.state.star)
// store.commit('close')
// console.log(store.state.star)

export default store
