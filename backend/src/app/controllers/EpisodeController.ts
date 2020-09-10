import { getEpisode, getNextEpisode, getPreviousEpisode } from '../repository/EpisodeRepository';
import { Request, Response } from 'express';

export class EpisodeController {
  static async get(request: Request, response: Response) {
    const { serie, season, ep } = request.params;

    const episode = await getEpisode(serie, Number(season), Number(ep));
    const nextEpisode = await getNextEpisode(serie, Number(season), Number(ep));
    const previousEpisode = await getPreviousEpisode(serie, Number(season), Number(ep));

    if(!episode) {
      return response.status(404).json({ err: 'Episode not found.' });
    }

    return response.status(200).json({ ...episode, nextEpisode, previousEpisode });
  }
}