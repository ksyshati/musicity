import {User} from "./user";
import {MusicalPage} from "./musicalPage";
import {Event} from "./event";

export class MusicalGenre{

  id: string;
  name: string;
  user: User;
  musicalPage: MusicalPage;
  event: Event;


  constructor(id: string, name: string, user: User, musicalPage: MusicalPage, event: Event) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.musicalPage = musicalPage;
    this.event = event;
  }
}
