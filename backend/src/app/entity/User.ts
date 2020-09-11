import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Video } from "./Video";
import { UserVideo } from "./UserVideo";

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @ManyToMany(type => Video, {  })
  videosWatched: Array<Video>;

  @OneToMany(type => UserVideo, userVideo => userVideo.user)
  @JoinTable()
  usersVideos: Array<UserVideo>;
}
