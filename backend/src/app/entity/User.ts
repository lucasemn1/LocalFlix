import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Episode } from "./Episode";
import { UserEpisode } from "./UserEpisode";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @ManyToMany(type => Episode, {  })
  episodesWatched: Array<Episode>;

  @OneToMany(type => UserEpisode, userEpisode => userEpisode.user)
  @JoinTable()
  usersEpisodes: Array<UserEpisode>;
}
