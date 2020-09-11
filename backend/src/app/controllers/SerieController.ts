import { Request, Response } from 'express';
import { getEpisode, getNextEpisode, getPreviousEpisode } from '../repository/EpisodeRepository';
import { startStream } from '../../util/stream';
import { listAll } from '../repository/SerieRepository';

export class SerieController {
  static async watch(request: Request, response: Response): Promise<Response> {
    const { serie } = request.params;
    const { ep } = request.params;
    const { season } = request.params;

    const video = await getEpisode(serie, Number(season), Number(ep));

    if (!video) {
      return response.status(404).json({ err: 'Video was not found.' });
    }

    const epPath: string = `${video.season.serie.seasonsPath}/${video.season.number}/${video.number}.${video.format}`;

    startStream(request, response, epPath);
  }
  
  static async listAll(request: Request, response: Response): Promise<Response> {
    const { username } = request.headers;

    try {
      const series = await listAll(String(username));

      return response.status(200).json(series);
    }
    catch (err) {
      return response.status(500).json({ err });
    }
  }

  static async nextEpisode(request: Request, response: Response) {
    const { serie, season, ep } = request.params;

    const nextEp = await getNextEpisode(serie, Number(season), Number(ep));

    if(!nextEp) {
      return response.status(404).json({ err: 'This is the last episode of this series' })
    }

    return response.status(200).json(nextEp);
  }

  static async previousEpisode(request: Request, response: Response) {
    const { serie, season, ep } = request.params;

    const previousEp = await getPreviousEpisode(serie, Number(season), Number(ep));

    if(!previousEp) {
      return response.status(404).json({ err: 'This is the first episode of this series' })
    }

    return response.status(200).json(previousEp);
  }
}