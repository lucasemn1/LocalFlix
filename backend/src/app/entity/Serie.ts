import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Media } from "../interfaces/Media";
import { Video } from "./Video";

@Entity()
export class Serie implements Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @OneToMany(type => Video, video => video.serie)
  videos: Array<Video>;
}
