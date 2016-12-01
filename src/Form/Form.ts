import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Form.template.html'
import Modal from '../modal/modal'

@Component(template<Form>({
  components: {
    Modal
  }
}))
export default class Form extends Vue {
  title = ''

  save() {}

  cancel() {
    this.$router.back()
  }
}
