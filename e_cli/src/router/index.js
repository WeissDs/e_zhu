import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/home'
import Like from '@/page/like'
import Me from '@/page/me'
import Detail from '@/page/hotel-detail'
import HotelList from '@/page/hotel-list'

import Test from '@/page/testDrag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // children: [{},{}]
    }, {
      path: '/like',
      name: 'like',
      component: Like
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
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
