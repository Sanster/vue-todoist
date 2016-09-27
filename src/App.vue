<template>
  <div id="todoist">
    <header>
      <div class="container">
        <div id="logo"><a href="#"><img src="https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif" width="30" height="30" class="cmp_light_logo"></a></div>
      </div>
    </header>

    <div class="holder">
      <left-menu></left-menu>
      <div id="main_content" class="main_content">
        <div id="editor">
          <div class="current_project_editor">
            <div class="list_editor">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./left-menu.vue"

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components: {
    LeftMenu
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
