<template>
  <div
    class="card"
    :style="{'background-image': `url('${media.image}')`}"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <div class="card-info" v-if="hover">
      <iframe
        style="width: 100%; height: 100%;"
        :src="`https://www.youtube.com/embed/${media.trailer}?autoplay=1`"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Card",
  props: {
    media: { type: Object },
  },
  methods: {},
  data() {
    return { hover: false };
  },
};
</script>

<style>
.card {
  height: 150px;
  min-width: 116.6px;
  border-radius: 5px;
  margin: 5px;
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: auto 120%;
  background-position-x: 50%;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #000000;
  flex: 0 0 auto;
}

.card:hover {
  transition: 0.4s;
  height: 300px;
  width: 533.3px;
  background-size: auto 100%;
}

.card-info {
  color: #ffffff;
  transition: 0.3s;
  font-size: 12px;
  border-radius: 5px;
  height: 100%;
  width: 100%;
}

@media (max-width: 768px) {
  .card:hover {
    width: 90vw;
  }
}
</style>