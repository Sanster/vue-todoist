<template>
  <div id="editor">
    <div class="current_project_editor">
      <div class="list_editor">
        <project-header></project-header>
        <ul class="items">
          <li class="task_item" v-for="item in taskItems">
            <task-item :text="item"></task-item>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectHeader from "./project-header.vue"
import TaskItem from "./task-item.vue"

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!',
      taskItems: [
        1,2,3
      ]
    }
  },
  components: {
    ProjectHeader,
    TaskItem
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

  .items {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .task_item td {
    padding-top: 13px;
    padding-bottom: 13px;
  }
}
</style>
