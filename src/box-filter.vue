<template>
  <div>
    <img src="./assets/images/icon-src.gif" :class="'cmp_filter_' + boxFilter.name" width="20" height="18">{{boxFilter.text}}<span class="counter">{{boxFilter.count}}</span>
  <div>
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

.cmp_filter_inbox {
  background: url('./assets/images/logo-background.png') 0 0 no-repeat;
  background-size: 197px,2782px;
  background-position: 0 -1465px;
  width: 20px;
  height: 18px;
}

.cmp_filter_today {
  background: url('./assets/images/logo-background.png') 0 0 no-repeat;
  background-size: 197px,2782px;
  background-position: 0 -1393px;
  width: 20px;
  height: 18px;
}

.cmp_filter_days {
  background: url('./assets/images/logo-background.png') 0 0 no-repeat;
  background-size: 197px,2782px;
  background-position: 0 -1483px;
  width: 20px;
  height: 18px;
}
</style>