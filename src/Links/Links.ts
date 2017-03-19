import Vue from 'vue'
import Component from 'vue-class-component'
import * as Template from './Links.html'

@Template
@Component
export default class Links extends Vue {
  links = [
    { title: 'vue.js', href: 'https://jp.vuejs.org' },
    { title: 'TypeScript - JavaScript that scales.', href: 'http://www.typescriptlang.org' },
    { title: 'Bootstrap · The most popular HTML, CSS, and JS framework in the world.', href: 'http://v4-alpha.getbootstrap.com' },
    { title: 'Vue.js Advent Calendar 2016 - Qiita', href: 'http://qiita.com/advent-calendar/2016/vue' },
    { title: 'TVアニメ「ご注文はうさぎですか？？」公式サイト', href: 'http://www.gochiusa.com' },
    { title: 'ご注文はうさぎですか? - Wikipedia', href: 'https://ja.wikipedia.org/wiki/ご注文はうさぎですか%3F' }
  ]
}
