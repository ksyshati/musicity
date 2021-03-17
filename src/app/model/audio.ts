import {MusicalPage} from "./musicalPage";

export class Audio{
  id: string;
  audioLink: string;
  musicalPage: MusicalPage;


  constructor(id: string, audioLink: string, musicalPage: MusicalPage) {
    this.id = id;
    this.audioLink = audioLink;
    this.musicalPage = musicalPage;
  }
}
