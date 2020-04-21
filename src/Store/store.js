import axios from "axios";
import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex, axios);
export default new vuex.Store({
  state: {
    cases: []
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("https://api.covid19india.org/data.json")
        .then(result => {
          // console.log(result.data.statewise);
          commit('SET_DATA', result.data.statewise);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.cases = data;
    }
  },
  getters: {
    country: state => {
      return state.cases[0];
    },
    statecases: state => {
      var array = state.cases.slice(1);
      return array;
    },
    isloaded: state => {
      return !!state.cases.length;
    }
  }
});
