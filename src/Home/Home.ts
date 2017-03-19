import Vue from 'vue'
import Component from 'vue-class-component'
import { Getter } from 'vuex-class'

import * as Template from './Home.html'
import Jumbotron from '../jumbotron/jumbotron'
import { Message } from '../vuex/state'

@Template
@Component<Home>({
  components: {
    Jumbotron
  },
  filters: {
    format(n: number) {
      return new Date(n).toLocaleString()
    }
  }
})
export default class Home extends Vue {
  @Getter messages: Message[]
}
