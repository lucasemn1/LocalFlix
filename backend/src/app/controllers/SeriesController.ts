import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Serie } from '../entity/Serie';
import { Season } from '../entity/Season';

export class SeriesController {
  static async listAll(request: Request, response: Response): Promise<Response> {
    const connection = await createConnection();

    try {
      let series = await connection.getRepository(Serie).find({ relations: ['seasons'] });

      await connection.close();
      return response.status(200).json(series);
    }
    catch(err) {
      await connection.close();
      return response.status(500).json({ err });
    }
  }

  static async get(request: Request, response: Response) {}

  static async continueWatching(request: Request, response: Response) {}

  static async nextEpisode(request: Request, response: Response) {}
}