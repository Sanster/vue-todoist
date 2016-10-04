<template>
    <div id="left_menu" class="left_menu">
    	<div id="list_holder">
    		<div id="top_section">
    			<top-filters></top-filters>
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
    		</div>
        <project-tab v-show="currentTab == 'show_projects'"></project-tab>
        <label-tab v-show="currentTab == 'show_labels'"></label-tab>
        <filter-tab v-show="currentTab == 'show_filters'"></filter-tab>
    	</div>
    </div>
</template>

<script>
import TopFilters from "./top-filters.vue"
import ProjectTab from "./project-tab.vue"
import LabelTab from "./label-tab.vue"
import FilterTab from "./filter-tab.vue"

export default {
  	data () {
    	return {
      	currentTab: "show_projects"
    	}
  	},
  	components: {
  		TopFilters,
      ProjectTab,
      LabelTab,
      FilterTab
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
#left_menu {
  float: left;
  width: 250px;
  padding-left: 35px;
  padding-top: 50px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  border-right: 1px solid #f1f1f1;
  background-color: #fafafa;
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;

  .items li:hover table {
    background-color: #fff;
    border-radius: 2px
  }
}

#list_holder {
	width: 230px;
}

li.current table {
  background: #fff;
  border-radius: 2px;
  font-weight: bold;
}

.left_list_man_holder {
  padding-bottom: 20px;
}

.left_list_man {
  padding: 10px 0 5px 0;
  .action {
    color: #dd4b39;
    margin-left: -2px;
  }
}

.actions {
  color: #555;
  a {
    margin-right: 10px;
    text-decoration: none;
  }
}

a.action {
  padding: 1px;
  text-decoration: none;
  color: #dd4b39;
  
  .icon {
    display: inline-block;
    width: 11px;
    font-size: 12px;
    margin-right: 15px;
    margin-top: -2px;
    text-decoration: none !important;
    border: 0;
  }

  .icon-add {
    margin-right: 14px;
    margin-left: 9px;
  }
}

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