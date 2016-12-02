import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Form.template.html'
import Modal from '../modal/modal'
import { mapActions } from 'vuex'

@Component(template<Form>({
  components: {
    Modal
  },
  beforeRouteEnter(to, from, next) {
    next((vm: Form) => {
      vm.title = ''
      vm.body = ''
    })
  },
  methods: mapActions(['storeMessage'])
}))
export default class Form extends Vue {
  title = ''
  body = ''

  storeMessage: (message: any) => Promise<void>

  save() {
    this.storeMessage({ title: this.title, body: this.body }).then(() => {
      this.$router.push({ name: 'home' })
    })
  }

  cancel() {
    this.$router.push({ name: 'home' })
  }
}
