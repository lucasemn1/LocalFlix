import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Media } from "../interfaces/Media";
import { Season } from "./Season";

@Entity({ name: 'series' })
export class Serie implements Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  thumbnail: string;

  @Column()
  urlName: string;

  @Column()
  seasonsPath: string;

  @OneToMany(type => Season, season => season.serie)
  seasons: Array<Season>
}
