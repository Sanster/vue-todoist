<template>
  <div id="todoist">
    <top-bar></top-bar>

    <div class="holder">
      <left-menu></left-menu>
      <div id="main_content" class="main_content">
        <editor></editor>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./left-menu.vue"
import TopBar from "./top-bar.vue"
import Editor from "./editor.vue"

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
