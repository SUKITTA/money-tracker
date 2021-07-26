import Vue from 'vue'
import Vuex from 'vuex'

// import Axios from 'axios'

import json_file from "../../data.json"

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
            data: json_file,
        }
        commit("fetch", { res })
    },
    addList({ commit }, payload) {
        
        commit("add", { payload })
    },

  },
  modules: {}
})
