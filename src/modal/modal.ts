import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

import * as Template from './modal.html'

@Template
@Component
export default class Modal extends Vue {
  @Prop readonly title: string

  close() {
    this.$emit('close')
  }
}
