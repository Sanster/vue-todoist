<template>
  <li class="filter">
    <img src="../../assets/images/icon-src.gif" :class="'cmp_filter_' + boxFilter.name" width="20" height="18">{{boxFilter.text}}<span class="counter">{{boxFilter.count}}</span>
  </li>
</template>

<script>
export default {
  props: ['boxFilter'],
  data () {
    return {
        msg: 'Hello left-menu'
    }
  }
}
</script>

<style lang="sass">
.box_filter img{
  width: 20px;
  height: 18px;
}
</style>