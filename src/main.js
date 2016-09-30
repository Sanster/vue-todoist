import Vue from 'vue'
import App from './App.vue'

require('./assets/stylesheets/application.scss')
require('./assets/stylesheets/cmp.scss')

new Vue({
  el: '#todoist',
  render: h => h(App)
})
