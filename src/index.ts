import Vue from 'vue'
import Component from 'vue-class-component'
import { mapActions } from 'vuex'

import * as Template from './index.html'
import router from './router'
import store from './vuex/store'
import Navbar from './navbar/navbar'
import './style.scss'

@Template
@Component<App>({
  components: {
    Navbar
  },
  router,
  store,
  methods: mapActions(['setMessages']),
  mounted() {
    this.setMessages()
  }
})
class App extends Vue {
  setMessages: () => Promise<void>
}

const vm = new App()

vm.$mount('#app')
