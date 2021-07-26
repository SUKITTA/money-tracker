import Vue from 'vue'
import Vuex from 'vuex'

// import Axios from 'axios'

import json_file from "../../data.json"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    balance: 0,
  },
  getters: {
      ledger: (state) => state.data,
      balance: (state) => state.balance,
  },
  mutations: {
    fetch (state, { res }) {
        state.data = res.data
    },
    add (state, { payload }) {
        state.data.push(payload)
    },
    calculate(state, { amount, type }) {
        if ( type === "Received" ){
            state.balance += parseInt(amount)
            // console.log("Yeah")
        }
        else if ( type === "Spent" ) {
            state.balance -= parseInt(amount)
            // console.log("Nahhh")
        }
    },
    // delete (state, { index }) {
        
    // },
  },
  actions: {
    fetchList({ commit }) {
        let res = {
            data: json_file,
        }
        for(const item of res.data) {
            commit("calculate", { amount: item.amount, type: item.type })
            // console.log(item)
        }
        commit("fetch", { res })
    },
    addList({ commit }, payload) {
        
        commit("add", { payload })

        commit("calculate", { amount: payload.amount, type: payload.type })
    },
    deleteList({commit}, payload) {

        commit("delete", {payload})
    }

  },
  modules: {}
})
