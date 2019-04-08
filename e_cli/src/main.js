// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import { Carousel, CarouselItem, Button } from 'element-ui'

import './common/css/base.css'
import './common/js/base.js'

Vue.config.productionTip = false
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
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
  components: { App },
  template: '<App/>'
})
