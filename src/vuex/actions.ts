import { ActionTree } from 'vuex'
import State, { Message } from './state'
import * as types from './types'
import Dexie from 'dexie'

class Database extends Dexie {
  messages: Dexie.Table<Message, number>

  constructor() {
    super('December4th')
    this.version(1).stores({
      messages: '++id,title,body,date'
    })
  }
}

const db = new Database()

export default {
  storeMessage({ commit }, { title, body }) {
    const message = new Message(title, body)
    return db.messages.add(message).then(() => {
      commit(types.STORE_MESSAGE, message)
    })
  },
  setMessages({ commit }) {
    return db.messages.reverse().toArray().then((messages) => {
      commit(types.SET_MESSAGES, messages)
    })
  },
  resetMessages({ commit }) {
    return db.delete().then(() => {
      commit(types.SET_MESSAGES, [])
    })
  }
} as ActionTree<State, never>
