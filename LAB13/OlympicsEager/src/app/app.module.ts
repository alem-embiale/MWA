import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.components';
import { OlympicsModule, OLYMPIC_ROUTES } from './olympics/olympics.module';
import { P404Component } from './p404.components';

const MY_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'olympics', children: OLYMPIC_ROUTES},
  {path: '404', component: P404Component},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    P404Component,
  ],
  imports: [
    BrowserModule,
    OlympicsModule,
    RouterModule.forRoot(MY_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }