import Vue from 'vue';
import Router from 'vue-router';
import LocalFlixRoutes from '../pages/LocalFlix/routes';
import { Route } from '../interfaces/Route';

Vue.use(Router);

const routes: Route[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login/index.vue'),
  },
  ...LocalFlixRoutes,
];

export default new Router({ routes, mode: 'history' });
