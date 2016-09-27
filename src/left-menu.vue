<template>
    <div id="left_menu" class="left_menu">
    	<div id="list_holder">
    		<div id="top_section">
    			<ul id="top_filters">
    				<li class="box_filter" v-for="boxFilter in boxFilters">
    					<box-filter :box-filter="boxFilter"></box-filter>
    				</li>
    			</ul>
    		</div>
    	</div>
    </div>
</template>

<script>
import BoxFilter from "./box-filter.vue"

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
      				text: "接下来 7 天",
      				count: "5",
      			}
      		}
    	}
  	},
  	components: {
  		BoxFilter
  	}
}
</script>

<style lang="sass">
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
}
</style>