<template>
  <div @mousemove="showTopBar()">
    <div id="top-bar" v-if="topBarVisible">
      <button class="button" @click="backToHome()">Início</button>
      <div class="info">
        <h3>Nome do filme.</h3>
      </div>
      <div class="actions">
        <button class="button">&lsaquo;</button>
        <button class="button">&rsaquo;</button>
      </div>
    </div>
    <video controls autoplay name="media" id="player" @ended="goToNextEpisode()">
      <source :src="`${baseAPI}/series/${serieName}/${season}/${episode}`" />
    </video>
  </div>
</template>

<script>
import { baseAPI } from '../services/api';
import router from '../router/index';

export default {
  name: 'MoviePlayer',

  created() {
    // eslint-disable-next-line no-restricted-globals
    this.deviceType = screen.width < 700 ? 'mobile' : 'desktop';
  },

  methods: {
    backToHome() {
      router.push('/');
    },

    showTopBar() {
      if (!this.topBarVisible) {
        this.topBarVisible = true;

        setTimeout(() => {
          this.topBarVisible = false;
        }, 3000);
      }
    },
  },

  mounted() {
    this.serieName = this.$route.params.serieName;
    this.season = this.$route.params.season;
    this.episode = this.$route.params.episode;
  },

  data: () => ({
    topBarVisible: false,
    deviceType: 'desktop',
    serieName: null,
    season: null,
    episode: null,
    baseAPI,
  }),
};
</script>

<style>
#top-bar {
  position: fixed;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  width: 100%;
  padding: 20px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 101;
}

#player {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  border: none;
  box-sizing: unset;
}

.button {
  border: none;
  color: #ffffff;
  background-color: rgba(175, 175, 175, 0.2);
  font-size: 19px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin: 5px;
  transition: 0.2s;
}

.button:hover {
  cursor: pointer;
  background-color: rgba(175, 175, 175, 0.8);
  transition: 0.2s;
}
</style>
