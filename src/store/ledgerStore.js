import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
  },
  getters: {
      ledger: (state) => state.data,
  },
  mutations: {
    fetch (state, { res }) {
        state.data = res.data
    },
    add (state, { payload }) {
        state.data.push(payload)
    }
  },
  actions: {
    fetchList({ commit }) {
        let res = {
            data: [
                // {
                //     date: "12/08/2021",
                //     amount: "2000",
                //     descriptions: "พ่อให้"
                // },
                // {
                //     date: "13/08/2021",
                //     amount: "7000",
                //     descriptions: "่้่้้asdfgfasdfsd"
                // },
                
            ]
        }
        commit("fetch", { res })
    },
    addList({ commit }, payload) {
        
        commit("add", { payload })
    },

  },
  modules: {}
})
