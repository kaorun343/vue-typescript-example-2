import Vue from 'vue'
import Component from 'vue-class-component'
import { Action } from 'vuex-class'

import * as Template from './Settings.html'
import Alert from '../alert/alert'

@Template
@Component({
  components: { Alert }
})
export default class Settings extends Vue {
  message = '削除しました'
  alert = false

  @Action readonly resetMessages: () => Promise<void>

  reset() {
    this.resetMessages().then(() => {
      this.alert = true
    })
  }

  close() {
    this.alert = false
  }
}
