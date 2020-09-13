<template>
  <div
    class="card"
    :style="{'background-image': `url('${baseAPI}/public/series/${this.media.serie.urlName}/${this.media.serie.thumbnail}')`}"
    @mouseenter="startTiming()"
    @mouseleave="stopTiming()"
  >
    <div class="card-info" v-if="hover" @click="goToVideo()">
      <iframe
        :src="`https://www.youtube.com/embed/${media.trailer}?autoplay=1`"
        class="video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        name="video"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import router from '../router';
import { baseAPI } from '../services/api';


export default {
  name: "Card",
  props: {
    media: { type: Object },
  },
  mounted() {
    console.log(this.media);
    console.log(`${baseAPI}/public/${this.media.serie.urlName}/${this.media.serie.thumbnail}`);
  },
  methods: {
    startTiming() {
      this.hover = true;
    },

    stopTiming() {
      this.hover = false;
    },

    goToVideo() {
      router.push(`/watch/series/${this.media.serie.urlName}/${this.media.watch.season.number}/${this.media.watch.number}`);
    }
  },
  data() {
    return {
      baseAPI,
      hover: false,
      focusedSeconds: 0,
      intervalId: undefined,
    };
  },
};
</script>

<style>
.card {
  height: 200px;
  min-width: 155.46px;
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

.video {
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@media (max-width: 700px) {
  .card:hover {
    width: 90vw;
  }
}
</style>