import Vue from 'vue'
import Router from 'vue-router'
import Paylist from '../pages/paylist'
require('../../util/http')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pay',
      component: Paylist,
      meta:{
        title: '登录',
      }
    }
  ]
})
