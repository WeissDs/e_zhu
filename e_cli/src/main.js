// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import axios from 'axios'
import { Carousel, CarouselItem, Button, MessageBox, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './common/css/base.css'
import './common/js/base.js'
import store from './store/store.js'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
// Vue.use(Vuex)

// 为什么 store 不存在啊啊啊啊啊好气啊！！！！！！
// const store = new Vuex.Store({
//   state: {
//     satr: false
//   },
//   mutations: {
//     show (star) {
//       star = true
//     },
//     close (star) {
//       star = false
//     }
//   }
// })
// Vue.use(MessageBox)
// Vue.use(Message)

// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$message = Message
// 将axios给到全局vue变量的prototype中，在组件中就不用重新初始化了
Vue.prototype.axios = axios.create({
  // 服务器所在地址 通用前缀
  baseURL: 'http://localhost:8090/api/',
  // 请求超时时间（毫秒）
  timeout: 1000
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
