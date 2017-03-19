import Vue from 'vue'
import Component from 'vue-class-component'

import * as Template from './Form.html'
import Modal from '../modal/modal'
import { Action } from 'vuex-class'

@Template
@Component<Form>({
  components: {
    Modal
  },
  beforeRouteEnter(to, from, next) {
    next((vm: Form) => {
      vm.title = ''
      vm.body = ''
    })
  }
})
export default class Form extends Vue {
  title = ''
  body = ''

  @Action readonly storeMessage: (message: any) => Promise<void>

  save() {
    this.storeMessage({ title: this.title, body: this.body }).then(() => {
      this.$router.push({ name: 'home' })
    })
  }

  cancel() {
    this.$router.push({ name: 'home' })
  }
}
