<template>
  <div id="editor">
    <div class="current_project_editor">
      <div class="list_editor">
        <h2 class="project_header section_header">
          <a href="#" class="project_link"> 
            <span> {{currentProject.title}} </span>
          </a>
          <div class="right_task_actions">
            <span class="clickable note_icon" data-note-type="project_note" data-note-parent-id="179486867">
              <img src="../../assets/images/icon-src.gif" width="15" height="14" class="cmp_comment clickable">
            </span>
            <a href="#">
              <img src="../../assets/images/icon-src.gif" width="26" height="16" class="cmp_share_project_plus">
            </a>
            <a href="#">
              <img src="../../assets/images/icon-src.gif" width="16" height="16" class="cmp_task_actions icon">
            </a>
          </div>
        </h2>
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
import TaskItem from "./task-item.vue"

export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!',
      taskItems: [
        1,2,3
      ],
      title: 'Hello Vue 2.0!'
    }
  },
  components: {
    TaskItem
  },
  computed: {
    currentProject () {
      return this.$store.state.currentProject;
    }
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

  .task_item td {
    padding-top: 13px;
    padding-bottom: 13px;
  }
}

.project_link {
  color: #303333;
  text-decoration: none !important;
}
</style>
