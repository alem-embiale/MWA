import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-olympics',
  template: `
    <h3>Games</h3>
    <app-games></app-games>
  `,
  styles: []
})
export class OlympicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}