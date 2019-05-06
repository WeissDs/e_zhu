import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home'
import Select from '@/page/select'
import Me from '@/page/me'
import Detail from '@/page/hotel-detail'
import HotelList from '@/page/hotel-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // children: [{},{}]
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
    }, {
      path: '/hotelList/:type',
      name: 'hotelList',
      component: HotelList
    }
  ]
})
