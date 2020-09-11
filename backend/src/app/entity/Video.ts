import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { Season } from "./Season";
import { UserVideo } from "./UserVideo";

@Entity({ name: 'videos' })
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  number: number;

  @Column()
  format: string;

  @ManyToOne(type => Season, season => season.videos)
  season: Season;

  @OneToMany(type => UserVideo, userVideo => userVideo.video)
  usersVideos: Array<UserVideo>;
}
