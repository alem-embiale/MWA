import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlympicsComponent } from './olympics.component';
import { GamesComponent } from './games.components';
import { GameDetailsComponent } from './game-details.component';
import { RouterModule } from '@angular/router';
import { DetailsGuard } from './details.guard';

export const OLYMPIC_ROUTES = [
  {path:'', component: OlympicsComponent},
  {path:'game/:id', component: GameDetailsComponent, canActivate: [DetailsGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ 
    GamesComponent,
    OlympicsComponent,
    GameDetailsComponent
  ],
  bootstrap: [ OlympicsComponent ]
})
export class OlympicsModule { }