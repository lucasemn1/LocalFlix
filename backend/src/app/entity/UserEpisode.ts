import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";
import { Episode } from "./Episode";

@Entity({ name: 'usersEpisodes' })
export class UserEpisode {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.usersEpisodes)
  user: User;

  @ManyToOne(type => Episode, video => video.usersEpisodes)
  episode: Episode;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: string;
}
