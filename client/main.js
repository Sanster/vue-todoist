import Vue from 'vue'
import App from './App.vue'

require('./assets/stylesheets/application.scss')

new Vue({
  el: '#todoist',
  render: h => h(App)
})
