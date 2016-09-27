<template>
  <div id="left_menu_tabs" v-bind:class="currentTab">
    <table>
      <tbody>
        <tr>
          <td @click="onProjectsTab" class="control projects sel_projects" width="33%">项目</td>
          <td @click="onLabelsTab" class="control labels" width="33%">标签</td>
          <td @click="onFiltersTab" class="control filters" width="33%">过滤器</td>
        </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  data () {
    return {
      currentTab: "show_projects"
    }
  },
  methods: {
    onTab: function(e){
      this.currentTab = "show_" + e.target.classList[1]
    },
    onProjectsTab: function(e) {
      this.onTab(e);
    },
    onLabelsTab: function(e) {
      this.onTab(e);
    },
    onFiltersTab: function(e) {
      this.onTab(e);
    },
  }
}
</script>

<style lang="sass">
#left_menu_tabs {
  margin-top: 25px;
  margin-bottom: 20px;
  white-space: nowrap;

  table {
    width: 100%;
  }

  .control {
    cursor: pointer;
    font-size: 13px;
    line-height: 1;
    padding: 0 5px 5px 2px;
    text-align: center;
    color: #9a9a9a;
    -webkit-transition: color .1s ease-in;
    transition: color .1s ease-in;
  }

  &.show_projects .projects, 
  &.show_labels .labels, 
  &.show_filters .filters {
      border-bottom: solid 1px #737373 !important;
      font-weight: bold;
      color: #5c5c5c !important;
  }
  
  td {
    border-bottom: 1px solid #e0e0e0;
  }
}
</style>