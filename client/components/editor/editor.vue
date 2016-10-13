<template>
  <div id="editor">
    <div class="current_project_editor">
      <div class="list_editor">
        <h2 class="project_header section_header" v-on:mouseover="mouseOver($event)">
          <a href="#" class="project_link"> 
            <span> {{selectedProject.name}} </span>
          </a>
          <div class="right_task_actions">
            <span class="clickable note_icon" data-note-type="project_note">
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
          <li class="task_item menu_clickable" v-for="task in tasks">
            <task-item :task="task"></task-item>
          </li>
          <new-task v-if="showAddNewTask" v-on:cancel="cancel" v-on:createNewTask="createNewTask"></new-task>
        </ul>

      </div>
      <div class="controller actions pe_controller">
        <a  href="#" class="action"
            @click.prevent="showAddTask" 
            v-show="!showAddNewTask">
            <span class="icon icon-add"></span>添加任务
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TaskItem from "./task-item.vue"
import NewTask from "./new-task.vue"

export default {
  data () {
    return {
      tasks: [
      ],
      showAddNewTask: false
    }
  },
  components: {
    NewTask,
    TaskItem
  },
  computed: {
    selectedProject () {
      return this.$store.state.selectedProject;
    }
  },
  methods: {
    mouseOver(event) {
      console.log("mouseOver");
      event.target.classList.add("current_editor");
    },
    showAddTask() {
      this.showAddNewTask = true;
    },
    cancel() {
      this.showAddNewTask = false;
    },
    createNewTask(taskContent) {
      let task = {
        content: taskContent,
        project_id: this.$store.state.selectedProject._id
      }
      
      this.$http.post('/api/tasks', task)
        .then((response) => {
          console.log(response);
          this.tasks.push(task)
        }, (response) => {
          console.log(response);
        });

      this.showAddNewTask = false;
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

  .gear_menu {
    visibility: hidden;
  }
  
  .controller {
    padding: 9px 0 0 3px;
  }
}

.gear_menu {
  -webkit-transition: opacity 150ms ease-in;
  transition: opacity 150ms ease-in;
}

td.menu:hover .gear_menu,
.on_menu_show .gear_menu {
  opacity: 1.0;
}

.task_item:hover .menu,
.on_menu_show .gear_menu {
    visibility: visible !important;
}

.current_editor .right_task_actions {
  visibility: visible !important;
}

.project_link {
  color: #303333;
  text-decoration: none !important;
}

.project_header {
  padding-bottom: 6px !important;
}

.right_task_actions {
  float: right;
  margin-top: -3px;

  span {
    font-size: 11px;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }

  .note_icon {
    margin-left: 5px;
    cursor: pointer;
    padding: 4px 7px;
    white-space: nowrap;
  }

  a {
    opacity: .3;
  }

  a,
  a:hover {
    margin-left: 15px;
    font-size: 11px;
    text-decoration: none !important;
  }
}
</style>
