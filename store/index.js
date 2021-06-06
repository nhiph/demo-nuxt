// import Vuex from 'vuex'

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       decks: [],
//     },
//     mutations: {
//       setDecks(state, decks) {
//         state.decks = decks
//       },
//     },
//     actions: {
//       setDecks(vuexContext, decks) {
//         vuexContext.commit('setDecks', decks)
//       },
//     },
//     getters: {
//       decks(state) {
//         return state.decks
//       },
//     },
//   })
// }

// export default createStore

export const state = () => ({
  decks: [],
})

export const mutations = {
  setDecks(state, decks) {
    state.decks = decks
  },
}

export const actions = {
  // nuxtServerInit chi thuc hien trong actions cua vuex
  nuxtServerInit(vuexContext, context) {
    // copy toan bo noi dung tu return new Promise((resolve, reject) => {}) trong syncData hoac fetch
    // vuexContext.commit('setDecks', data sau thuc thi)
  },
  setDecks(vuexContext, decks) {
    vuexContext.commit('setDecks', decks)
  },
}

export const getters = {
  decks(state) {
    return state.decks
  },
}
