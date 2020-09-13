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



  // id: 1,
  // name: "Naruto Shippuden",
  // urlName: "NarutoShippuden",
  // lastWatched: {
  //   season: 9,
  //   episode: 200,
  // },
  // year: 2017,
  // duration: "2 horas",
  // url: "#",
  // image:
  //   "https://media.fstatic.com/lvMZVJHq3-EcuFjKAGy-RU1VqHI=/fit-in/640x480/smart/media/movies/covers/2011/07/c4d7d0a7453bb2edca07609ac9f9918a.jpg",
  // trailer: "3cxixDgHUYw",
  // color: "black",
  // type: "serie",
}
