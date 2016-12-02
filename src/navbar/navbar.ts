import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './navbar.template.html'

@Component(template({}))
export default class Navbar extends Vue {
  links = [
    { title: 'ホーム', name: 'home' },
    { title: 'リンク一覧', name: 'links' },
    { title: '設定', name: 'settings' }
  ]
}
