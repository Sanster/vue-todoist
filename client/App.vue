<template>
  <div id="todoist">
    <top-bar></top-bar>
    <div class="holder">
      <left-menu></left-menu>
      <div id="main_content" class="main_content">
        <router-view name="project"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./components/left_menu/left-menu.vue"
import TopBar from "./components/top_bar/top-bar.vue"
import Editor from "./components/editor/editor.vue"
require('./assets/stylesheets/application.scss')

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components: {
    LeftMenu,
    TopBar,
    Editor
  }
}
</script>

<style>
</style>
