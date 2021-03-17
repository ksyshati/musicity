import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import {AuthService} from '../../../services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params['authFailed']) {
    //     this.message
    //   }
    // });
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/card', 'identity-card']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }

}
