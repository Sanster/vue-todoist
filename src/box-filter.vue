<template>
  <div>
    <img v-bind:src="boxFilter.logo" class="cmp_filter_inbox">
    {{boxFilter.text}}
    <span class="counter">{{boxFilter.count}}</span>
  <div>
</template>

<script>
export default {
    props: ['boxFilter'],
    data () {
      return {
          msg: 'Hello left-menu'
      }
    },
}
</script>

<style>
  .box_filter img{
    width: 20px;
    height: 18px;
  }
</style>