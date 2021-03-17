import {MusicalPage} from "./musicalPage";
import {Foto} from "./foto";

export class Member{

  id: string;
  lastName: string;
  firstName: string;
  nickname: string;
  instagram: string;
  vkontakte: string;
  description: string;
  musicalPage: MusicalPage;
  photo: Foto;


  constructor(id: string, lastName: string, firstName: string, nickname: string, instagram: string, vkontakte: string, description: string, musicalPage: MusicalPage, photo: Foto) {
    this.id = id;
    this.lastName = lastName;
    this.firstName = firstName;
    this.nickname = nickname;
    this.instagram = instagram;
    this.vkontakte = vkontakte;
    this.description = description;
    this.musicalPage = musicalPage;
    this.photo = photo;
  }
}
