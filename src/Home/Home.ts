import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Home.template.html'
import Jumbotron from '../jumbotron/jumbotron'

@Component(template<Home>({
  components: {
    Jumbotron
  }
}))
export default class Home extends Vue {
  messages = []
}
