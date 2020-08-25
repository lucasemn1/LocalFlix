import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { User } from "./User";
import { Serie } from "./Serie";

@Entity()
export class Video {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  path: string;

  @Column()
  number: number;

  @ManyToMany(type => User, users => users.videosWatched)
  usersWhoWatched: Array<User>;

  @ManyToMany(type => Serie)
  serie: Serie;
}
