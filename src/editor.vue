<template>
  <div id="editor">
    <div class="current_project_editor">
      <div class="list_editor">
        <project-header></project-header>
        <ul class="items">
          <li></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "./project-header.vue"

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  },
  components: {
    ProjectHeader
  }
}
</script>

<style lang="sass">
$editor-width: 596px;

#editor {
  width: $editor-width;
  vertical-align: top;
  padding-top: 80px!important;
  padding-bottom: 75px!important;
  padding: 6px 25px 12px 35px;

  .current_project_editor {
    margin-bottom: 38px;
    padding-bottom: 2px;
  }

  .list_editor {

  }
}
</style>
