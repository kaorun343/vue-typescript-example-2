import { ActionTree } from 'vuex'
import State, { Message } from './state'
import * as types from './types'

export default {
  storeMessage({ commit }, { title, body }) {
    return new Promise((resolve) => {
      commit(types.STORE_MESSAGE, new Message(title, body))
      resolve()
    })
  },
  setMessages({ commit }) { }
} as ActionTree<State, never>
