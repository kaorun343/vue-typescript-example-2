import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './index.template.html'
import router from './router'
import { mapActions } from 'vuex'
import store from './vuex/store'
import Navbar from './navbar/navbar'
import './style.scss'

@Component(template<App>({
  components: {
    Navbar
  },
  router,
  store,
  methods: mapActions(['setMessages']),
  mounted() {
    this.setMessages()
  }
}))
class App extends Vue {
  setMessages: () => Promise<void>
}

const vm = new App()

vm.$mount('#app')
