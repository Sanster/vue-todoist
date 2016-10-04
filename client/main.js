import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

require('./assets/stylesheets/application.scss')

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentProject: {}
  },
  mutations: {
    setCurrentProject (state, project) {
      state.currentProject = project;
    }
  }
})

new Vue({
  el: '#todoist',
  store,
  render: h => h(App)
})
