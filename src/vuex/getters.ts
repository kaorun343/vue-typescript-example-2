import { GetterTree } from 'vuex'
import State from './state'

export default {
  messages(state) {
    return state.messages
  }
} as GetterTree<State, never>
