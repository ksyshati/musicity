import {MusicalPage} from "./musicalPage";
import {User} from "./user";
import {Answer} from "./answer";


export class Comment{

  id: string;
  userLastName: string;
  userFirstName: string;
  text: string;
  event: Event;
  location: Location;
  musicalPage: MusicalPage;
  user: User;
  answers: Answer[];


  constructor(id: string, userLastName: string, userFirstName: string, text: string, event: Event, location: Location, musicalPage: MusicalPage, user: User, answers: Answer[]) {
    this.id = id;
    this.userLastName = userLastName;
    this.userFirstName = userFirstName;
    this.text = text;
    this.event = event;
    this.location = location;
    this.musicalPage = musicalPage;
    this.user = user;
    this.answers =  answers;
  }

}
