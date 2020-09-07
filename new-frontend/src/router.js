import Vue from 'vue';
import Home from './pages/Home.vue';
import SeriesPlayer from './pages/SeriesPlayer.vue';
import MoviePlayer from './pages/MoviePlayer.vue';
import Login from './pages/Login.vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: Login,
  },

  {
    path: '/',
    component: Home,
  },

  {
    path: '/watch/series/:serieName/:season/:episode',
    component: SeriesPlayer,
  },

  {
    path: '/watch/movie/:movieName',
    component: MoviePlayer,
  },

  {
    path: '*',
  }
]

export default new Router({ routes, mode: 'history' });