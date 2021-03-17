import {Event} from "./event";
import {Location} from "./location";

export class DataAndTime{

  id: string;
  dataEvent: Date ;
  startEvent: Date;
  endEvent: Date;
  event: Event;
  locations: Location[];


  constructor(id: string, dataEvent: Date, startEvent: Date, endEvent: Date, event: Event, locations: Location[]) {
    this.id = id;
    this.dataEvent = dataEvent;
    this.startEvent = startEvent;
    this.endEvent = endEvent;
    this.event = event;
    this.locations = locations;
  }
}
