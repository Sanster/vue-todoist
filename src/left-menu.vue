<template>
    <div id="left_menu" class="left_menu">
    	<div id="list_holder">
    		<div id="top_section">
    			<ul id="top_filters">
    				<li class="box_filter" v-for="boxFilter in boxFilters">
    					<box-filter :box-filter="boxFilter"></box-filter>
    				</li>
    			</ul>
    			<left-menu-tabs></left-menu-tabs>
    		</div>
    	</div>
    </div>
</template>

<script>
import BoxFilter from "./box-filter.vue"
import LeftMenuTabs from "./left-menu-tabs.vue"

export default {
  	data () {
    	return {
      		boxFilters: {
      			inBox: {
      				logo: "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif",
      				text: "收件箱",
      				count: "3",
      			},
      			todayBox: {
      				logo: "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif",
      				text: "今天",
      				count: "2",
      			},
      			next7DayBox: {
      				logo: "https://d3ptyyxy2at9ui.cloudfront.net/76084e29cb2cf72b320e888edc583dfb.gif",
      				text: "接下来7天",
      				count: "5",
      			}
      		}
    	}
  	},
  	components: {
  		BoxFilter,
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

#top_filters {
	margin: 0;
	padding: 0;
	padding-top: 24px;
	margin-bottom: 21px;

	.box_filter {
		font-size: 14px;
		color: #303333;
		line-height: 26px;
		cursor: pointer;
		margin-bottom: 2px;
		padding: 7px 0;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		-webkit-transition: color .1s ease-in,background-color .1s ease-in;
    	transition: color .1s ease-in,background-color .1s ease-in;
	}

	.counter {
	    display: inline-block;
	    color: #b3b3b3;
	    margin: 5px;
	    font-size: 11px;
	    line-height: 15px;
	}
}
</style>