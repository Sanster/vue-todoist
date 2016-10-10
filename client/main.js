import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import App from './App.vue'

require('./assets/stylesheets/application.scss')

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    selectedProject: {}
  },
  mutations: {
    setSelectedProject (state, project) {
      state.selectedProject = project;
    }
  }
})

new Vue({
  el: '#todoist',
  store,
  render: h => h(App)
})
