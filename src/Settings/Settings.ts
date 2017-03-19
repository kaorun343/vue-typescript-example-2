import Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Settings.template.html'
import { mapActions } from 'vuex'
import Alert from '../alert/alert'

@Component(template({
  components: { Alert },
  methods: mapActions(['resetMessages'])
}))
export default class Settings extends Vue {
  message = '削除しました'
  alert = false

  resetMessages: () => Promise<void>

  reset() {
    this.resetMessages().then(() => {
      this.alert = true
    })
  }

  close() {
    this.alert = false
  }
}
