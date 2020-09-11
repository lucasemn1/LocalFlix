import { createConnection } from "typeorm";
import { Episode } from "../entity/Episode";
import { SeasonEps as ISeasonEps } from '../interfaces/SeasonEps';
import { SeasonRepository } from './SeasonRepository';

export async function getEpisode(serie: string, season: number, ep: number) {
  const connection = await createConnection();

  try {
    const episode = await connection.getRepository(Episode)
      .createQueryBuilder('episodes')
      .leftJoinAndSelect('episodes.season', 'seasons')
      .leftJoinAndSelect('seasons.serie', 'series')
      .where(`series.urlName LIKE :urlName`, { urlName: serie })
      .andWhere('seasons.number = :season', { season })
      .andWhere(`episodes.number = :ep`, { ep })
      .getOne();

    await connection.close();
    
    return episode;
  }
  catch (err) {
    console.log(err);
    await connection.close();
    return null;
  }
}

export async function getFirstEpisode(serie: string, season: number) {
  const connection = await createConnection();

  try{
    const episode = await connection
      .getRepository(Episode)
      .createQueryBuilder('episodes')
      .leftJoinAndSelect('episodes.season', 'seasons')
      .leftJoin('seasons.serie', 'series')
      .where('series.urlName LIKE :urlName', { urlName: serie })
      .andWhere('seasons.number = :season', { season })
      .orderBy('episodes.number', 'ASC')
      .limit(1)
      .getOne();

    await connection.close();
    return episode;
  } 
  catch(err) {
    console.log(err);
    await connection.close();
    return null;
  }
}

export async function getLastWatchedEpisode(serie: string, username: string) {
  const connection = await createConnection();

  try {
    const episode = await connection.getRepository(Episode)
      .createQueryBuilder('episodes')
      .leftJoinAndSelect('episodes.season', 'seasons')
      .leftJoin('seasons.serie', 'series')
      .leftJoin('episodes.usersepisodes', 'usersepisodes')
      .leftJoin('usersepisodes.user', 'users')
      .where(`series.urlName LIKE :urlName`, { urlName: serie })
      .andWhere('users.nickname LIKE :nickname', { nickname: username })
      .orderBy('usersepisodes.createdAt', 'DESC')
      .getOne();

    await connection.close();
    return episode;
  }
  catch (err) {
    console.log(err);
    await connection.close();
    return null;
  }
}

export async function getNextEpisode(serie: string, season: number, ep: number) {
  let nextEp = { urlName: serie, season, episode: ep };

  let seasonEps: Array<ISeasonEps> = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(nextEp.season));
  seasonEps = seasonEps.sort((a, b) => { return a.episodes_number - b.episodes_number });

  if (seasonEps.filter(seasonEp => seasonEp.episodes_number === nextEp.episode).length !== 0) {
    if (Number(nextEp.episode) < seasonEps[seasonEps.length - 1].episodes_number) {
      nextEp.episode++;
    }
    else {
      seasonEps = await SeasonRepository.getSeasonEps(nextEp.urlName, Number(season) + 1);

      if (seasonEps.length === 0) {
        nextEp = null;
      }
      else {
        nextEp.episode++;
        nextEp.season++;
      }
    }

    return nextEp;
  }

  return null;
}

export async function getPreviousEpisode(serie: string, season: number, ep: number) {
  let previousEp = { urlName: serie, season, episode: ep };

  let seasonEps: Array<ISeasonEps> = await SeasonRepository.getSeasonEps(previousEp.urlName, Number(previousEp.season));
  seasonEps = seasonEps.sort((a, b) => { return a.episodes_number - b.episodes_number });

  if (seasonEps.filter(seasonEp => seasonEp.episodes_number === previousEp.episode).length !== 0) {
    if (previousEp.episode > seasonEps[0].episodes_number) {
      previousEp.episode--;
    }
    else {
      seasonEps = await SeasonRepository.getSeasonEps(previousEp.urlName, season - 1);

      if (seasonEps.length === 0) {
        previousEp = null;
      }
      else {
        previousEp.episode--;
        previousEp.season--;
      }
    }

    return previousEp;
  }

  return null;
}