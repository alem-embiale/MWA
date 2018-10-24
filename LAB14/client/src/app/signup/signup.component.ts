import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { HttpService } from '../http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private http: HttpService, private router: Router) {
    this.form = this.fb.group({
      'firstName': [''],
      'lastName': [''],
      'email': ['', Validators.required, this.checkEmail],
      'passwords': this.fb.group({
        'password': ['', Validators.required],
        'confirmPassword': ['', Validators.required]
      }, { validator: this.checkPasswords })
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.http.register(this.form.value)
      .subscribe(
        res => {
          this.router.navigateByUrl('/login');
        }
      );
  }

  checkPasswords(group: FormGroup) {
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;

    return password === confirmPassword ? null : { notSame: true }
  }

  checkEmail = (control: FormControl) => {
    return new Promise<any>(async (resolve, reject) => {
      this.http.emailExists(control.value)
        .subscribe(
          res => {
            resolve(res);
          },
          err => {
            console.log(err);
          }
        );
    })
  }

  get f() { return this.form.controls; }
  get p() { return this.f.passwords.controls; }
}
