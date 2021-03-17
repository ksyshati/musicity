import {MusicalPage} from "./musicalPage";
import {Location} from "./location";
import {DataAndTime} from "./dataAndTime";
import {Comment} from "./comment";
import {Foto} from "./foto";
import {Video} from "./video";
import {MusicalGenre} from "./musicalGenre";


export class Event{

  id: string;
  description: string;
  musicalPage: MusicalPage;
  location: Location;
  dataAndTime: DataAndTime;
  comments: Comment[];
  photos: Foto[];
  videos: Video[];
  musicalGenre: MusicalGenre[];


  constructor(id: string, description: string, musicalPage: MusicalPage, location: Location, dataAndTime: DataAndTime, comments: Comment[], photos: Foto[], videos: Video[], musicalGenre: MusicalGenre[]) {
    this.id = id;
    this.description = description;
    this.musicalPage = musicalPage;
    this.location = location;
    this.dataAndTime = dataAndTime;
    this.comments = comments;
    this.photos = photos;
    this.videos = videos;
    this.musicalGenre = musicalGenre;
  }
}
