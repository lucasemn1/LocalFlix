import { Route } from '../../interfaces/Route';

export const home = '/';
export const seriePlayer = '/watch/series/:serieName/:season/:episode';

const routes = new Array<Route>();

routes.push({
  path: home,
  name: 'LocalFlix',
  component: () => import('./Home/index.vue'),
});

export default routes;
