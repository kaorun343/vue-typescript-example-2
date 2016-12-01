import * as Vue from 'vue'
import Component from 'vue-class-component'
import * as template from './jumbotron.template.html'
import { zero } from '../util'

function format(y: number, m: number, d: number) {
  return `${y}年${zero(m)}月${zero(d)}日`
}

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const date = today.getDate()

@Component(template<Jumbotron>({}))
export default class Jumbotron extends Vue {
  today = format(year, month, date)

  isBirthday = month === 12 && date === 4
}
