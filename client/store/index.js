import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProject: {}
  },
  mutations: {
    setSelectedProject (state, project) {
      state.selectedProject = project;
    }
  }
})