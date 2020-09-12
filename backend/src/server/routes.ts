import { Router } from 'express';
import { SerieController } from '../app/controllers/SerieController';
import { SeriesInfoController } from '../app/controllers/SeriesInfoController';

import { LoginMiddleware } from '../app/middlewares/LoginMiddleware';
import { EpisodeController } from '../app/controllers/EpisodeController';
import { LoginController } from '../app/controllers/LoginController';

export const routes = Router();

routes.get('/series', LoginMiddleware.userLogged, SerieController.listAll);
routes.get('/series/:serie/:season/:ep', SerieController.watch);
routes.get('/serie/info/:serie', SeriesInfoController.get);
routes.get('/series/next-ep/:serie/:season/:ep', LoginMiddleware.userLogged, SerieController.nextEpisode);
routes.get('/series/previous-ep/:serie/:season/:ep', LoginMiddleware.userLogged, SerieController.previousEpisode);

routes.get('/episode/:serie/:season/:ep', EpisodeController.get);
routes.post('/login', LoginController.login);