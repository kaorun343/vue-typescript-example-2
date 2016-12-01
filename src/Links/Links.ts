import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './Links.template.html'

@Component(template({}))
export default class Links extends Vue {
  links = []
}
