import * as Vue from 'vue'
import { Component, prop } from 'vue-property-decorator'
import * as template from './modal.template.html'

@Component(template({}))
export default class Modal extends Vue {
  @prop({type: null})
  title: string

  close() {
    this.$emit('close')
  }
}
