import { SeasonEps as ISeasonEps } from '../interfaces/SeasonEps';
import { createConnection } from 'typeorm';
import { Season } from '../entity/Season';

export class SeasonRepository {
  static async getSeasonEps(urlName: String, season: Number) {
    const connection = await createConnection();

    try{
      let seasonEps: Array<ISeasonEps> = await connection
        .createQueryBuilder()
        .select('seasons.number')
        .from(Season, 'seasons')
        .leftJoinAndSelect('seasons.serie', 'series')
        .leftJoinAndSelect('seasons.videos', 'videos')
        .where('series.urlName LIKE :urlName', { urlName })
        .andWhere('seasons.number = :season', { season })
        .execute();

      await connection.close();
      return seasonEps;
    } 
    catch(err) {
      console.log(err);
      await connection.close();
      return [];
    }
  }
}

 