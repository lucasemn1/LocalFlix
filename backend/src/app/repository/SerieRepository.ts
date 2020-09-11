import { createConnection } from "typeorm";
import { Serie } from "../entity/Serie";
import { getLastWatchedEpisode, getFirstEpisode } from './EpisodeRepository';
import { Season } from "../entity/Season";
import { Video } from "../entity/Video";

export async function listAll(username: string) {
  const connection = await createConnection();

  try {
    const seriesAvaliable = await connection.getRepository(Serie).find();
    await connection.close();
    const series = [];

    for(const serieAvaliable of seriesAvaliable) {
      let toWatch: Video = await getLastWatchedEpisode(serieAvaliable.urlName, username);

      if(!toWatch) {
        const firstSeason = await getFirstSeason(serieAvaliable.urlName);
        const firstEpisode = await getFirstEpisode(serieAvaliable.urlName, firstSeason.number);
        toWatch = firstEpisode;
      }

      series.push({
        serie: serieAvaliable,
        watch: toWatch
      });
    }

    return series;
  }
  catch(err) {
    console.log(err);
    await connection.close();
    return null;
  }
}

export async function getFirstSeason(serie: string) {
  const connection = await createConnection();

  try {
    const season = await connection
      .getRepository(Season)
      .createQueryBuilder('seasons')
      .leftJoin('seasons.serie', 'series')
      .where('series.urlName LIKE :urlName', { urlName: serie })
      .orderBy('seasons.number', 'ASC')
      .limit(1)
      .getOne();

    await connection.close();
    return season;
  }
  catch(err) {
    console.log(err);
    await connection.close();
    return null;
  }
}