import * as Vue from 'vue'
import * as template from './index.template.html'
import router from './router'
import Navbar from './navbar/navbar'

const vm = new Vue(template({
  components: {
    Navbar
  },
  router
}))

vm.$mount('#app')
