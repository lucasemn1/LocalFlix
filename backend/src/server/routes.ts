import { Router } from 'express';
import { SeriesController } from '../app/controllers/SeriesController';
import { VideoController } from '../app/controllers/VideoController';
import { SeriesInfoController } from '../app/controllers/SeriesInfoController';

export const routes = Router();

routes.get('/series', SeriesController.index);
routes.get('/series/:serie/:season/:ep', VideoController.get);
routes.get('/serie/info/:serie', SeriesInfoController.get);