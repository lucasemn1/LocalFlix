import { Router } from 'express';
import { SerieController } from '../app/controllers/SerieController';
import { VideoController } from '../app/controllers/VideoController';

export const routes = Router();

routes.get('/series', SerieController.index);
routes.get('/series/:serie/:season/:ep', VideoController.get);