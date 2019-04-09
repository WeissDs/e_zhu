import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Select from '@/page/select'
import Me from '@/page/me'
import Detail from '@/page/hotel-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/select',
      name: 'select',
      component: Select
    }, {
      path: '/me',
      name: 'me',
      component: Me
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
