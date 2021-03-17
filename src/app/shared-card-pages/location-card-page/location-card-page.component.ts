import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-card-page',
  templateUrl: './location-card-page.component.html',
  styleUrls: ['./location-card-page.component.scss']
})
export class LocationCardPageComponent implements OnInit {
  showTimetable = false;
  showPhoto = false;

  constructor() { }

  ngOnInit() {
  }

}
