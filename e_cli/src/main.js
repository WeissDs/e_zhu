// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Swipe, SwipeItem, Button, Range, Navbar, TabItem } from 'mint-ui'

import 'mint-ui/lib/style.css'

import './common/css/base.css'
import './common/js/base.js'
import store from './store/store.js'

Vue.config.productionTip = false
// mitui 初始化
// 轮播
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// button
Vue.component(Button.name, Button)
// 滑块
Vue.component(Range.name, Range)
// 选项卡
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);


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
