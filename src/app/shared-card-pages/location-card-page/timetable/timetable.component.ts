import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() openTimetable = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
