import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Serie } from '../entity/Serie';

export class SeriesController {
  static async index(request: Request, response: Response): Promise<Response> {

    const connection = await createConnection();

    try {
      const series = await connection.getRepository(Serie).find();

      await connection.close();
      return response.status(200).json(series);
    }
    catch(err) {
      await connection.close();
      return response.status(500).json({ err });
    }
  }
}