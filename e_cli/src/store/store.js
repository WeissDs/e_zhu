import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // like: false,
    hotelCollect: []
  },
  mutations: {
    addLike (state, hotelId) {
      // state.like = true
      state.hotelCollect.push(hotelId)
    },
    cancelLike (state, hotelId) {
      // state.like = false
      let index = state.hotelCollect.indexOf(hotelId)
      state.hotelCollect.splice(index, 1)
    }
  }
})

// store.commit('addLike')
// console.log(store.state.like)

export default store
