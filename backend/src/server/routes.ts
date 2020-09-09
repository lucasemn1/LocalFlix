import { Router } from 'express';
import { SerieController } from '../app/controllers/SerieController';
import { SeriesInfoController } from '../app/controllers/SeriesInfoController';

import { LoginMiddleware } from '../app/middlewares/LoginMiddleware';

export const routes = Router();

routes.get('/series', LoginMiddleware.userLogged, SerieController.listAll);
routes.get('/series/:serie/:season/:ep', SerieController.watch);
routes.get('/serie/info/:serie', SeriesInfoController.get);
routes.get('/series/next-ep/:serie/:season/:ep', LoginMiddleware.userLogged, SerieController.nextEpisode);
routes.get('/series/previous-ep/:serie/:season/:ep', LoginMiddleware.userLogged, SerieController.previousEpisode);