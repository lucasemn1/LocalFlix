import { createConnection } from "typeorm";
import { Video } from "../entity/Video";


export async function getEpisode(serie: string, season: number, ep: number) {
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
    return video;
  }
  catch(err) {
    console.log(err);
    await connection.close();
    return null;
  }
}