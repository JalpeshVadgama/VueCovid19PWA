import axios from "axios";
import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex, axios);
export default new vuex.Store({
  state: {
    data: []
  },
  actions: {
    loadData() {
      axios
        .get("https://api.covid19india.org/data.json")
        .then(result => {
          console.log(result);
          this.commit('SET_DATA', result);
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
  }
});
