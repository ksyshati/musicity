import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  sexes = [{
    type: 'yes',
    text: 'Female'
  }, {
    type: 'no',
    text: 'Male'
  }];
  defaultSex = 'yes';

  constructor() { }

  ngOnInit() {
  }

}
