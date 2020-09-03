import Vue from 'vue';
import Home from './pages/Home.vue';
import SeriesPlayer from './pages/SeriesPlayer.vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/',
    component: Home,
  },

  {
    path: '/watch/series/:serieName/:season/:episode',
    component: SeriesPlayer,
  },

  {
    path: '/watch/movie/:movie/:episode',
    component: SeriesPlayer,
  },

  {
    path: '*',
  }
]

export default new Router({ routes, mode: 'history' });