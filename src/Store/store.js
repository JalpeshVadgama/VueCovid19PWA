import axios from "axios";
import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex, axios);
export default new vuex.Store({
  state: {
    data: []
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("https://api.covid19india.org/data.json")
        .then(result => {
          console.log(result.data.statewise);
          commit('SET_DATA', result.data.statewise);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data
    }
  },
  getters: {
    country: state => {
      return state.data[0];
    },
    statewise: state => {
      return state.data.shift();
    }
  }
});
