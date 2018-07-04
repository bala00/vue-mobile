<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="top"></router-view>
    <router-view/>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{margin:0;font-size: 14px; background:#f4f4f4}
  a{text-decoration: none;color: #333}
  a:hover, a:active{color: #333;}
  ul,li{margin:0;padding: 0;}

  li{list-style: none;}
  .txl{text-align: left}
  .txr{text-align: right}
  .txct{text-align: center}
  .fl{float: left;}
  .fr{float: right}
  #app, .pr{position: relative;}
  .img-reposive{display: block; width: 100%;}

  .clearfix{zoom: 1;}
  .clearfix::after{
    display: block;
    content: '';
    height: 0;
    clear: both;
  }
</style>
