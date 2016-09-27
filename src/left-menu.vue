<template>
    <div id="left_menu" class="left_menu">
    	<div id="list_holder">
    		<div id="top_section">
    			<top-filters></top-filters>
    			<left-menu-tabs></left-menu-tabs>
    		</div>
    	</div>
    </div>
</template>

<script>
import TopFilters from "./top-filters.vue"
import LeftMenuTabs from "./left-menu-tabs.vue"

export default {
  	data () {
    	return {
      		msg: ""
    	}
  	},
  	components: {
  		TopFilters,
  		LeftMenuTabs
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
}

#list_holder {
	width: 230px;
}
</style>