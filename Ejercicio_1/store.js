import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    app: {
      currentPath: '/'
    }
  },
  mutations: {
    setCurrentPath(state, path) {
      state.app.currentPath = path;
    }
  },
  actions: {
    updateCurrentPath({ commit }, path) {
      commit('setCurrentPath', path);
    }
  }
});
