// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
import axios from 'axios'
import { Carousel, CarouselItem, Button, MessageBox, Message, Upload } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './common/css/base.css'
import './common/js/base.js'
import store from './store/store.js'

Vue.config.productionTip = false
// element按需加载组件
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
Vue.use(Upload)
Vue.component(Message.name, Message)
Vue.component(MessageBox.name, MessageBox)
// Vuex初始化
// Vue.use(Vuex)

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
