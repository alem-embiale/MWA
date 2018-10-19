import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.services';

@Component({
  selector: 'app-game-details',
  template: `
    <h3>Game Details</h3>
    {{details}}
  `,
  styles: []
})
export class GameDetailsComponent implements OnInit {

  private id;
  private details: any;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.subscription = route.params.subscribe(params => { 
      this.id = params['id'];
    });
  }

  ngOnInit() {
    this.details = JSON.stringify(this.dataService.getGame(this.id));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}