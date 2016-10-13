<template>
  <div id="project_list_holder">
    <ul id="project_list" class="items generic_left_list">
      <li :class="'clickable menu_clickable indent_' + project.indent" v-for="project in projects" @click="showProject(project)">
        <div class="arrow" v-if="project.indent == 1" @click="arrowClicked(project, $event)">
          <img src="../../assets/images/icon-src.gif" width="10" height="10" :class="project.expend ? 'cmp_open_arrow_down' : 'cmp_open_arrow_right'">
        </div>
        <table cellpadding="0" cellspacing="0" class="item_table">
          <tbody>
            <tr>
              <td class="td_color">
                <div class="div_color counter_color icon-project" style="color: rgb(251, 136, 110);"></div>
              </td>
              <td>
                <div class="td_separator" style="width: 2px;"></div>
              </td>
              <td class="name">
                <router-link 
                  :to="{ name: 'project', params: { id: project._id }}">
                  <span>{{project.name}}</span><div class="counter_count" id="project_count_171109322">{{project.count}}</div>
                </router-link>
              </td>
              <td class="menu">
                <div class="icon menu cmp_menu_on gear_menu"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </li>
      <new-project v-if="showAddNewProject" v-on:cancel="cancel" v-on:createNewProject="createNewProject"></new-project>
      <div id="project_list_man" class="left_list_man_holder">
        <div class="left_list_man actions" v-show="!showAddNewProject">
          <a href="" class="action sel_add_project" @click.prevent="showAddProject">
            <span class="icon icon-add"></span>添加项目
          </a>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import NewProject from "./new-project.vue"

export default {
  components: {
    NewProject
  },
  beforeMount: function () {
    this.$http.get('http://localhost:4000/api/projects')
      .then((response) => {
        this.projects = response.body;
        this.showProject(this.projects[0]);
      }, (response) => {
        console.log(response);
      });
  },
  data () {
    return {
      showAddNewProject: false,
      projects: []
    }
  },
  methods: {
    arrowClicked: function (project, event) {
      project.expend = !project.expend;

      //hide all indented li
      let li = event.target.closest('li');
      while(true){
        let nextLi = li.nextSibling;
        if( nextLi && !nextLi.classList.contains("indent_1")){
          nextLi.style.display = project.expend ? "" : "none";
          li = nextLi;
        }else{
          break;
        }
      }
    },
    cancel: function () {
      this.showAddNewProject = false;
    },
    createNewProject: function (projectName) {
      let project = {
        name: projectName,
      }
      console.log("createNewProject")
      this.$http.post('http://localhost:4000/api/projects', 
        project).then((response) => {
          this.projects.push(project)
        }, (response) => {
          console.log(response);
        });

      this.showAddNewProject = false;
    },
    showAddProject: function() {
      this.showAddNewProject = true;
    },
    showProject (project) {
      this.$store.commit('setSelectedProject', project);
    },
  }
}
</script>

<style lang="sass">

</style>
