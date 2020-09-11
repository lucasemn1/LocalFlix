import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User } from '../entity/User';

export class SeriesInfoController {
  static async get(request: Request, response: Response): Promise<Response> {
    const connection = await createConnection();
    const { serie } = request.params;
    const { username } = request.headers;

    try {
      const epsWatched = await connection.getRepository(User)
        .createQueryBuilder('users')
        .leftJoinAndSelect('users.episodesWatched', 'episodes')
        .leftJoinAndSelect('episodes.season', 'seasons')
        .leftJoinAndSelect('seasons.serie', 'series')
        .where('users.nickname LIKE :username', { username })
        .andWhere('series.urlName LIKE :serie', { serie })
        .getMany();

      await connection.close();
      return response.status(200).json(epsWatched);
    }
    catch(err) {
      console.log(err);
      await connection.close();
      return response.status(500).json({ err });
    }
  }
}