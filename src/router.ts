import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

import Form from './Form/Form'
import Home from './Home/Home'
import Links from './Links/Links'
import Settings from './Settings/Settings'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      children: [
        { path: 'new', component: Form, name: 'new' }
      ]
    },
    { path: '/links', component: Links, name: 'links' },
    { path: '/settings', component: Settings, name: 'settings' }
  ]
})
