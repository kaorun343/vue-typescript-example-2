import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Settings.template.html'
import { mapActions } from 'vuex'

@Component(template({
  methods: mapActions(['resetMessages'])
}))
export default class Settings extends Vue {
  resetMessages: () => Promise<void>

  reset() {
    this.resetMessages()
  }
}
