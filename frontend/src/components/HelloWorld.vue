<template>
  <div id="page" v-bind="increment()">
    <div id="contador">{{ counter }}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      counter: 0
    };
  }, 

  methods: {
    increment() {
      setInterval(() => {
        this.counter++;
      }, 1001)
    }
  }
};
</script>

<style>
</style>