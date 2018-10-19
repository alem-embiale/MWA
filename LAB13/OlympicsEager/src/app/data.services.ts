import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = [
    {
      _id: 1,
      game: {
        name: 'Rowing',
        schedule: [
          {stadium: 'MNS', date: '10/20/2018', time: '17:00'}
        ]
      }
    },
    {
      _id: 2,
      game: {
        name: 'Football',
        schedule: [
          {stadium: 'NNM', date: '10/20/2018', time: '18:00'}
        ]
      }
    }
  ];
  constructor() { }

  getData(){
    return this.data;
  }
  getGame(id: number){
    for(let g of this.data){
      if(g._id == id) {
        return g;
      }
    }
    return {};
  }
  isValidId(id: number): boolean{
    for(let g of this.data){
      if(g._id == id) {
        return true;
      }
    }
    return false;
  }
}