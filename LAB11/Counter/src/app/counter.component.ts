import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <span>
      <button (click) = decrease()>-</button>
      {{counterValue}}
      <button (click) = increase()>+</button>
    </span>
 
  `,
  styles: ['span{border: 2px solid orange; padding: 25px}' ]
})
export class CounterComponent implements OnInit {

  @Input('counter') counterValue:number;
  @Output() counterChange = new EventEmitter();  


  constructor() {

    this.counterValue = 0;

   }

   decrease(){
     this.counterValue--;
     this.counterChange.emit(this.counterValue);
     return false;
   }

   increase(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnInit() {
  }

}
