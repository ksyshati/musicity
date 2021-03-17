import {User} from "./user";
import {MusicalPage} from "./musicalPage";
import {Member} from "./member";
import {Location} from "./location";
import {Event} from "./event";
import {Proposal} from "./proposal";

export class Foto{

  id: string;
  fotoLink: string;
  user: User;
  musicalPage: MusicalPage;
  member: Member;
  location: Location;
  event: Event;
  proposal: Proposal;


  constructor(id: string, fotoLink: string, user: User, musicalPage: MusicalPage, member: Member, location: Location, event: Event, proposal: Proposal) {
    this.id = id;
    this.fotoLink = fotoLink;
    this.user = user;
    this.musicalPage = musicalPage;
    this.member = member;
    this.location = location;
    this.event = event;
    this.proposal = proposal;
  }
}
