import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // like: false,
    // 酒店列表
    shopListArr: [
        {
          'id': 'asidi111',
          'name': 'AAAAAAAAAAAAAAAAAAASSSSS酒店',
          'price': '2002',
          'location': '223,667'
        },
        {
          'id': 'asidi222',
          'name': 'BB酒店',
          'price': '299',
          'location': '100,200'
        },
        {
          'id': 'asidi333',
          'name': '云上依人民宿',
          'price': '298',
          'location': '558'
        },
        {
          'id': 'asidi444',
          'name': 'AAAAAAAAAAAAAAAAAAASSSSS酒店',
          'price': '2002',
          'location': '223,667'
        },
        {
          'id': 'asidi555',
          'name': 'BB酒店',
          'price': '299',
          'location': '100,200'
        },
        {
          'id': 'asidi666',
          'name': '云上依人民宿',
          'price': '298',
          'location': '558'
        },
        {
          'id': 'asidi777',
          'name': 'AAAAAAAAAAAAAAAAAAASSSSS酒店',
          'price': '2002',
          'location': '223,667'
        },
        {
          'id': 'asidi888',
          'name': 'BB酒店',
          'price': '299',
          'location': '100,200'
        },
        {
          'id': 'asidi999',
          'name': '云上依人民宿',
          'price': '298',
          'location': '558'
        }
      ],
    // 收藏的酒店列表
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
