import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  template: `
    <ul>
      <li *ngFor="let str of names">{{str}}</li>
    </ul>
  `,
  styles: []
})
export class MycomponentComponent implements OnInit {

  @Input() names : string[];
  
  constructor() {}

  ngOnInit() {
  }

}