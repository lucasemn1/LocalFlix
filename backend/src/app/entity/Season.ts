import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { Episode } from "./Episode";
import { Serie } from "./Serie";

@Entity({ name: 'seasons' })
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @OneToOne(type => Episode, episode => episode.season)
  episodes: Array<Episode>

  @ManyToOne(type => Serie, serie => serie.seasons)
  serie: Serie;

  // @ManyToMany(type => Episode)
  // @JoinTable()
  // episodesWatched: Array<Episode>;
}
