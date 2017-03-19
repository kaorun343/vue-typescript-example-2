import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './navbar.html'

@Template
@Component
export default class Navbar extends Vue {
  links = [
    { title: 'ホーム', name: 'home' },
    { title: 'リンク一覧', name: 'links' },
    { title: '設定', name: 'settings' }
  ]
}
