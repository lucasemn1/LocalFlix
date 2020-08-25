import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { User } from "./User";
import { Serie } from "./Serie";

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

  @ManyToOne(type => Serie, serie => serie.videos)
  serie: Serie;
}
