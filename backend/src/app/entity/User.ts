import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Video } from "./Video";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @ManyToMany(type => Video, videos => videos.usersWhoWatched)
  videosWatched: Array<Video>;
}
