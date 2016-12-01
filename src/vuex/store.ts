import * as Vue from 'vue'
import { install, Store } from 'vuex'
import State from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(install)

export default new Store({
  state: new State(),
  getters,
  mutations,
  actions
})
