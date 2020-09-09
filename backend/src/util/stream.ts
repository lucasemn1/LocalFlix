import { Response, Request } from "express";
import * as fs from 'fs';

export function startStream(request: Request, response: Response, filePath: string) {
  fs.stat(filePath, (err, stats) => {
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
      'Content-Type': 'video/mp4',
    });

    // É importante usar status 206 - Partial Content para o streaming funcionar
    response.status(206);

    // Utilizando ReadStream do Node.js
    // Ele vai ler um arquivo e enviá-lo em partes via stream.pipe()
    const stream = fs.createReadStream(filePath, { start, end });
    stream.on('open', () => stream.pipe(response));
    stream.on('error', (streamErr) => response.end(streamErr));
  });
}