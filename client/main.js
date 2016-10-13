import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import store from './store'
import router from './router'
import app from './App.vue'

Vue.use(VueResource);

new Vue({
  el: '#todoist',
  store,
  router,
  render: h => h(app)
})
