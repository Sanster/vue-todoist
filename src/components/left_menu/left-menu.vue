<template>
    <div id="left_menu" class="left_menu">
    	<div id="list_holder">
    		<div id="top_section">
    			<top-filters></top-filters>
    			<left-menu-tabs></left-menu-tabs>
    		</div>
        <project-list-holder :addNewProject="addNewProject" v-on:cancel="cancelAddNewProject"></project-list-holder>
        
        <div id="project_list_man" class="left_list_man_holder">
          <div class="left_list_man actions" v-if="!addNewProject">
            <a href="" class="action sel_add_project" @click.prevent="addProject">
              <span class="icon icon-add"></span>添加项目
            </a>
          </div>
        </div>
    	</div>
    </div>
</template>

<script>
import TopFilters from "./top-filters.vue"
import LeftMenuTabs from "./left-menu-tabs.vue"
import ProjectListHolder from "./project-list-holder.vue"

export default {
  	data () {
    	return {
      	msg: "",
        addNewProject: false
    	}
  	},
  	components: {
  		TopFilters,
  		LeftMenuTabs,
      ProjectListHolder,
  	},
    methods: {
      addProject: function() {
        this.addNewProject = true;
      },
      cancelAddNewProject: function() {
        this.addNewProject = false;
      }
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
</style>