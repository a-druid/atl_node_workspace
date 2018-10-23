<template>
  <div id="app" style="height:100%">
  <router-view/>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%!important;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
  }
</style>