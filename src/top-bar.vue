<template>
  <header id="top_bar">
    <div class="container">
      <div id="logo"><a href="#"><img src="./assets/images/icon-src.gif" width="30" height="30" class="cmp_light_logo"></a></div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Vue 2.0!'
    }
  }
}
</script>

<style lang="sass">
$header-height: 43px;
$logo-height: 25px;
$logo-width: $logo-height;

#top_bar {
    height: 43px;
    background-color: #fff;
    top: 0;
    position: fixed;
    z-index: 200;
    width: 100%;
    border-bottom: solid 1px #ca2100;
    background-color: #db4c3f;
    -webkit-transition: height 200ms ease-in;
    transition: height 200ms ease-in;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
  
  .container {
    margin-left: 150px;
    margin-right: 150px;
    height: 100%;
  }

  #logo {
    float: left;
    margin-left: 35px;
    margin-top: ($header-height - $logo-height) / 2;
  }

  .cmp_light_logo {
    background: url('./assets/images/logo-background.png') 0 0 no-repeat;
    background-size: 197px,2782px;
    background-position: 0 -1811px;
    width: $logo-width;
    height: $logo-height;
  }
}
</style>
