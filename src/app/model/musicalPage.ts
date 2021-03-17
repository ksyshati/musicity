import {Member} from "./member";
import {Event} from "./event";
import {Comment} from "./comment";
import {User} from "./user";
import {Location} from "./location";
import {Foto} from "./foto";
import {Video} from "./video";
import {Audio} from "./audio";
import {MusicalGenre} from "./musicalGenre";

export class MusicalPage{

  id: string;
  name: string;
  rating: number;
  members: Member[];
  events: Event[];
  comments: Comment[];
  users: User[];
  locations: Location[];
  photos: Foto[];
  videos: Video[];
  audios: Audio[];
  musicalGenres: MusicalGenre[];


  constructor(id: string, name: string, rating: number, members: Member[], events: Event[], comments: Comment[], users: User[], locations: Location[], photos: Foto[], videos: Video[], audios: Audio[], musicalGenres: MusicalGenre[]) {
    this.id = id;
    this.name = name;
    this.rating = rating;
    this.members = members;
    this.events = events;
    this.comments = comments;
    this.users = users;
    this.locations = locations;
    this.photos = photos;
    this.videos = videos;
    this.audios = audios;
    this.musicalGenres = musicalGenres;
  }
}
