import {Event} from "./event";
import {Comment} from "./comment";
import {User} from "./user";
import {DataAndTime} from "./dataAndTime";
import {MusicalPage} from "./musicalPage";
import {Foto} from "./foto";

export class Location{

  id: string;
  name: string;
  address: string;
  rating: number;
  event: Event;
  comments: Comment[];
  users: User[];
  calendar: DataAndTime[];
  musicalPages: MusicalPage[];
  photos: Foto[];


  constructor(id: string, name: string, address: string, rating: number, event: Event, comments: Comment[], users: User[], calendar: DataAndTime[], musicalPages: MusicalPage[], photos: Foto[]) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.rating = rating;
    this.event = event;
    this.comments = comments;
    this.users = users;
    this.calendar = calendar;
    this.musicalPages = musicalPages;
    this.photos = photos;
  }
}
