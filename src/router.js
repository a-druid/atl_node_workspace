import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Tab1 from './views/Tab1/Tab1.vue'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tab1',
      name: 'Tab1',
      component: Tab1
    }
  ]
})
