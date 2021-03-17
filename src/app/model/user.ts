import {Comment} from "./comment";
import {Proposal} from "./proposal";
import {Location} from "./location";
import {MusicalPage} from "./musicalPage";
import {Foto} from "./foto";
import {Video} from "./video";
import {MusicalGenre} from "./musicalGenre";

export class User{

  id?: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  // instagram: string;
  // vkontakte: string;
  // comments: Comment[];
  // proposals: Proposal[];
  // location: Location[];
  // musicalPages: MusicalPage[];
  // foto: Foto;
  // videos: Video[];
  // musicalGenres: MusicalGenre[];

  constructor(id: string, password: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  // constructor(id: string, password: string, firstName: string, lastName: string, email: string, instagram: string, vkontakte: string, comments: Comment[], proposals: Proposal[], location: Location[], musicalPages: MusicalPage[], foto: Foto, videos: Video[], musicalGenres: MusicalGenre[]) {
  //   this.id = id;
  //   this.password = password;
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.email = email;
  //   this.instagram = instagram;
  //   this.vkontakte = vkontakte;
  //   this.comments = comments;
  //   this.proposals = proposals;
  //   this.location = location;
  //   this.musicalPages = musicalPages;
  //   this.foto = foto;
  //   this.videos = videos;
  //   this.musicalGenres = musicalGenres;
  // }
}
