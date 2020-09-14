
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '/login',
    component: () => import('../pages/Login/index.vue'),
  },
  {
    path: '/',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/watch/series/:serieName/:season/:episode',
    component: () => import('../pages/MoviePlayer.vue'),
  },
  {
    path: '/watch/movie/:movieName',
    component: () => import('../pages/MoviePlayer.vue'),
  },
  {
    path: '*',
  },
];

export default new Router({ routes, mode: 'history' });

