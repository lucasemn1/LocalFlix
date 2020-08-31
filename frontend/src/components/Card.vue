/* eslint-disable vue/no-parsing-error */
<template>
  <div class="card">
    <div
      class="card-info"
      v-bind:style="{ 'background-image': require('@/assets/' + media.image + '.jpg') }"
    >
      <h2>{{ media.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
interface Media {
  name: string;
  image: string;
}

export default {
  name: "Card",
  props: {
    media: { type: Object }
  },
  computed: {
    // getImage() {
    //   return require(`@/assets/${media.image}.jpg`);
    // }
  },
  data() {
  }
};
</script>

<style>
.card {
  height: 150px;
  width: 150px;
  border-radius: 10px;
  margin: 2px;
}
</style>