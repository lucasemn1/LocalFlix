import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { Season } from "./Season";
import { UserEpisode } from "./UserEpisode";

@Entity({ name: 'episodes' })
export class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  number: number;

  @Column()
  format: string;

  @ManyToOne(type => Season, season => season.episodes)
  season: Season;

  @OneToMany(type => UserEpisode, userEpisode => userEpisode.episode)
  usersEpisodes: Array<UserEpisode>;
}
