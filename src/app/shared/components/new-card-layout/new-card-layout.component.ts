import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MusicalCard} from '../../interfaces';
import {NewCardLayoutService} from './new-card-layout.service';

@Component({
  selector: 'app-new-card-layout',
  templateUrl: './new-card-layout.component.html',
  styleUrls: ['./new-card-layout.component.scss']
})
export class NewCardLayoutComponent implements OnInit {
  form: FormGroup;
  constructor(private newCardLayoutService: NewCardLayoutService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required)
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    const musicalCard: MusicalCard = {
      name: this.form.value.name
    };
    this.newCardLayoutService.create(musicalCard).subscribe(() => {
      this.form.reset();
    });
  }

}
