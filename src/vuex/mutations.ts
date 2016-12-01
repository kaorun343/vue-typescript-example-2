import { MutationTree }  from 'vuex'
import State from './state'
import * as types from './types'

export default {
  [types.STORE_MESSAGE](state, message) {
    state.messages.unshift(message)
  },
  [types.SET_MESSAGES](state, messages) {
    state.messages = messages
  }
} as MutationTree<State>
