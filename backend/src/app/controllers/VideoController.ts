import { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { Video } from '../entity/Video';
import * as fs from 'fs';

export class VideoController {
  static async get(request: Request, response: Response): Promise<Response> {
    const { serie } = request.params;
    const { ep } = request.params;
    const { season } = request.params;

    const connection = await createConnection();

    try {
      const video = await connection.getRepository(Video)
        .createQueryBuilder('videos')
        .leftJoinAndSelect('videos.season', 'seasons')
        .leftJoinAndSelect('seasons.serie', 'series')
        .where(`series.urlName LIKE :urlName`, { urlName: serie })
        .andWhere('seasons.number = :season', { season })
        .andWhere(`videos.number = :ep`, { ep })
        .getOne();

      await connection.close();

      if(!video) {
        return response.status(404).json({ err: 'Video was not found.' });
      }

      const epPath: string = `${video.season.serie.seasonsPath}/${video.season.number}/${video.number}.${video.format}`;

      fs.stat(epPath, (err, stats) => {
        if (err) {
          console.log(err);
          throw new Error('File not found');
        }

        // Variáveis necessárias para montar o chunk header corretamente
        const range = request.headers.range;
        const { size } = stats;
        const start = Number((range || '').toString().replace(/bytes=/, '').split('-')[0]);
        const end = size - 1;
        const chunkSize = (end - start) + 1;

        // Definindo headers de chunk
        response.set({
          'Content-Range': `bytes ${start}-${end}/${size}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'video/mp4'
        });

        // É importante usar status 206 - Partial Content para o streaming funcionar
        response.status(206);

        // Utilizando ReadStream do Node.js
        // Ele vai ler um arquivo e enviá-lo em partes via stream.pipe()
        const stream = fs.createReadStream(epPath, { start, end });
        stream.on('open', () => stream.pipe(response));
        stream.on('error', (streamErr) => response.end(streamErr));
      });
    }
    catch (err) {
      await connection.close();
      return response.status(500).json({ err });
    }
  }
}