import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToOne } from "typeorm";
import { Video } from "./Video";
import { Serie } from "./Serie";

@Entity({ name: 'seasons' })
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  epsPath: string;

  @OneToOne(type => Video, video => video.season)
  videos: Array<Video>

  @ManyToOne(type => Serie, serie => serie.seasons)
  serie: Serie;

  @ManyToMany(type => Video)
  @JoinTable()
  videosWatched: Array<Video>;
}
