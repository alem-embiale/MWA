import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(credentials) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/login', credentials)
        .subscribe(
          data => {
            if (!data) {
              resolve()
            } else {
              localStorage.setItem('id_token', data.token);
              resolve(true);
            }
          },
          err => reject(err)
        )
    })
  }

  loggedIn() {
    return !this.helper.isTokenExpired(localStorage.getItem('id_token'))
  };

  logout() { localStorage.removeItem('id_token') }
}
