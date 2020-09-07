import { Router } from 'express';
import { SeriesController } from '../app/controllers/SeriesController';
import { VideoController } from '../app/controllers/VideoController';
import { SeriesInfoController } from '../app/controllers/SeriesInfoController';

import { LoginMiddleware } from '../app/middlewares/LoginMiddleware';

export const routes = Router();

routes.get('/series', LoginMiddleware.userLogged, SeriesController.listAll);
// routes.get('/series/:serie/:season/:ep', LoginMiddleware.userLogged, VideoController.get);
routes.get('/series/:serie/:season/:ep', VideoController.get);
routes.get('/serie/info/:serie', SeriesInfoController.get);