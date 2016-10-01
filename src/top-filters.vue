<template>
  <ul id="top_filters">
    <li class="filter" v-for="boxFilter in boxFilters">
      <box-filter :box-filter="boxFilter"></box-filter>
    </li>
  </ul>
</template>

<script>
import BoxFilter from "./box-filter.vue"

export default {
    data () {
      return {
          boxFilters: [
            {
              name: "inbox",
              text: "收件箱",
              count: "3",
            },
            {
              name: "today",
              text: "今天",
              count: "2",
            },
            {
              name: "days",
              text: "接下来7天",
              count: "5",
            }
          ]
      }
    },
    components: {
      BoxFilter,
    }
}
</script>

<style lang="sass">
  #top_filters {
    margin: 0;
    padding: 0;
    padding-top: 24px;
    margin-bottom: 21px;
  
    li:hover {
      background-color: #fff
    }
    
    .filter {
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

        img {
          margin-left: 3px;
          margin-top: -4px;
          margin-right: 10px;
          -webkit-transition: opacity .1s ease-in;
          transition: opacity .1s ease-in;
      }
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