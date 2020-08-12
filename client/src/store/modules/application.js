export default {
  namespaced: true,
  state: {
    data: {}
  },
  getters: {},
  mutations: {
    update(state, data) {
      state.data = data;
    }
  },
  actions: {
    fetch({ commit }) {
      fetch('http://localhost:3000/application').then((response) => {
        response.json().then(function (data) {
          commit('update', data);
        });
      });
    }
  }
}