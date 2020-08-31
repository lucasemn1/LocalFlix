<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
  import Home from './pages/Home.vue';

  export default {
    components: { Home }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;600&display=swap');
  
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    min-height: 100vh;
    background-color: #080808;
  }
</style>
