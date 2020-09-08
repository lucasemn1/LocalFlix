import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Serie } from '../entity/Serie';
import { SeasonRepository } from '../repository/SeasonRepository';
import { SeasonEps as ISeasonEps } from '../interfaces/SeasonEps';

export class SeriesController {
  static async listAll(request: Request, response: Response): Promise<Response> {
    const connection = await createConnection();

    try {
      const series = await connection.getRepository(Serie).find({ relations: ['seasons'] });

      await connection.close();
      return response.status(200).json(series);
    }
    catch(err) {
      await connection.close();
      return response.status(500).json({ err });
    }
  }

  static async nextEpisode(request: Request, response: Response) {
    const { serie, season, ep } = request.params;

    let nextEp = { urlName: serie, season: Number(season), episode: Number(ep) };

    try {
      let seasonEps: Array<ISeasonEps> = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(nextEp.season));
      seasonEps = seasonEps.sort((a, b) => { return a.videos_number - b.videos_number });

      if(seasonEps.filter(seasonEp => seasonEp.videos_number === nextEp.episode).length !== 0) {
        if(Number(nextEp.episode) < seasonEps[seasonEps.length - 1].videos_number) {
          nextEp.episode++;
        }
        else {
          seasonEps = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(season) + 1);

          if(seasonEps.length === 0) {
            nextEp.episode = 0;
            nextEp.season = 0;
          }
          else {
            nextEp.episode++;
            nextEp.season++;
          }
        }
  
        return response.json(nextEp);
      }
      else {
        return response.status(404).json({err: 'This episode does not belong to this season'});
      }
    } 
    catch(err) {
      return response.status(500).json({err});
    }
  }

  static async previousEpisode(request: Request, response: Response) {
    const { serie, season, ep } = request.params;

    let nextEp = { urlName: serie, season: Number(season), episode: Number(ep) };

    try {
      let seasonEps: Array<ISeasonEps> = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(nextEp.season));
      seasonEps = seasonEps.sort((a, b) => { return a.videos_number - b.videos_number });

      if(seasonEps.filter(seasonEp => seasonEp.videos_number === nextEp.episode).length !== 0) {
        if(Number(nextEp.episode) < seasonEps[seasonEps.length - 1].videos_number) {
          nextEp.episode--;
        }
        else {
          seasonEps = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(season) - 1);

          if(seasonEps.length === 0) {
            nextEp.episode = 0;
            nextEp.season = 0;
          }
          else {
            nextEp.episode--;
            nextEp.season--;
          }
        }
  
        return response.json(nextEp);
      }
      else {
        return response.status(404).json({err: 'This episode does not belong to this season'});
      }
    } 
    catch(err) {
      return response.status(500).json({err});
    }
  }
}