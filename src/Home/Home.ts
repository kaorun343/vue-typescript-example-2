import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Home.template.html'
import Jumbotron from '../jumbotron/jumbotron'
import { mapGetters } from 'vuex'
import { Message } from '../vuex/state'

@Component(template<Home>({
  components: {
    Jumbotron
  },
  computed: mapGetters(['messages']),
  filters: {
    format(n: number) {
      return new Date(n).toLocaleString()
    }
  }
}))
export default class Home extends Vue {
  messages: Message[]
}
