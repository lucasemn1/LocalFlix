import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";
import { Serie } from "./Serie";
import { Season } from "./Season";

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
}
