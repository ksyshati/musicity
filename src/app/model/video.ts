import {User} from "./user";
import {MusicalPage} from "./musicalPage";
import {Event} from "./event";

export class Video{

  id: string;
  videoLink: string;
  user: User;
  musicalPage: MusicalPage;
  event: Event;


  constructor(id: string, videoLink: string, user: User, musicalPage: MusicalPage, event: Event) {
    this.id = id;
    this.videoLink = videoLink;
    this.user = user;
    this.musicalPage = musicalPage;
    this.event = event;
  }
}
