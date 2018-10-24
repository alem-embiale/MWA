import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-protected',
  template:  `{{ request }}`,
})
export class ProtectedComponent implements OnInit {
  request: string = 'Making request to /protected';

  constructor(private http: HttpService) {

    this.http.protectedRequest()
      .then(data => {
        this.request = 'successful';
      })
      .catch(err => {
        this.request = 'error';
      })
  }

  ngOnInit() {
  }

}
