import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";
import { Video } from "./Video";

@Entity({ name: 'usersVideos' })
export class UserVideo {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.usersVideos)
  user: User;

  @ManyToOne(type => Video, video => video.usersVideos)
  video: Video;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: string;
}
