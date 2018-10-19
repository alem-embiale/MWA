import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.services';

@Component({
  selector: 'app-games',
  template:` 
    <ul>
      <li *ngFor="let game of games"><a [routerLink]="['game', game._id]">{{game.game.name}}</a></li>
    </ul>
  `,
  styles: []
})
export class GamesComponent implements OnInit {

  private games = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = this.dataService.getData();
  }

}