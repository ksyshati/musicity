import {User} from "./user";
import {Foto} from "./foto";

export class Proposal {

  id: string;
  locationAddress: string;
  text: string;
  user: User;
  photos: Foto[];


  constructor(id: string, locationAddress: string, text: string, user: User, photos: Foto[]) {
    this.id = id;
    this.locationAddress = locationAddress;
    this.text = text;
    this.user = user;
    this.photos = photos;
  }
}
