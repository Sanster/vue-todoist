import Vue from 'vue'
import VueRouter from 'vue-router'
import Editor from '../components/editor/editor.vue'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { 
      path: '/project/:id', 
      name: 'project', 
      components: {
        project: Editor,
      }
    }
  ]
})