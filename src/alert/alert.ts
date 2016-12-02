import * as Vue from 'vue'
import { Component, prop } from 'vue-property-decorator'
import * as template from './alert.template.html'

@Component(template({}))
export default class Alert extends Vue {
  @prop({ type: null })
  type: string

  @prop({ type: null })
  message: string

  get alertType() {
    return `alert-${this.type}`
  }

  close() {
    this.$emit('close')
  }
}
