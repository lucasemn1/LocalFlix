<template>
  <div id="player">aaa</div>
</template>

<script>

export default {
  name: "Player",
  
  mounted() {
    console.log('hello world');
    console.log(this.$route.params);   
  }
};
</script>

<style>
#player {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 104;
}
</style>