import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss']
})
export class PhotoPageComponent implements OnInit {
  @Output() openPhoto = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

}
