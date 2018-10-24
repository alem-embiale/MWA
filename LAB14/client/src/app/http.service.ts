import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  emailExists(email: string) {
    return this.http.post('http://localhost:5000/emailExists', {email});
  }

  register(data) {
    return this.http.post('http://localhost:5000/register', {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.passwords.password
    });
  }

  protectedRequest() {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:5000/protected', {})
        .subscribe(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
}
