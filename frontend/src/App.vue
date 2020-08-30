<template>
  <div id="app">
    <Home />
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import Home from './pages/Home.vue';

  @Options({
    components: {
      Home,
    },
  })
  export default class App extends Vue {}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap');
  
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
