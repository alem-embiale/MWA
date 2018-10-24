import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.form = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.auth.login(this.form.value)
      .then(res => {
        if (res) this.router.navigateByUrl('/protected');
        else alert('Username or password wrong!');
      })
      .catch(err => console.log(err));
  }

  get f() { return this.form.controls; }
}
