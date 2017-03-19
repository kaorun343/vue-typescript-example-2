import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import * as Template from './alert.html'

@Template
@Component
export default class Alert extends Vue {
  @Prop readonly type: string

  @Prop readonly message: string

  get alertType() {
    return `alert-${this.type}`
  }

  close() {
    this.$emit('close')
  }
}
