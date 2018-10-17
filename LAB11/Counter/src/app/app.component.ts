import { Component } from '@angular/core';
import { getQueryValue } from '@angular/core/src/view/query';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <app-counter [counter]='counter' (counterChange)= change($event)></app-counter>
      <input [value]='counter' (keyup)= 'counter=$event.target.value'/>
      Component counter value is {{counter}}
    </div>
  `,
  styles: [ 'div {border: 2px solid green; padding: 25px; width: 500px;  }']
})
export class AppComponent {
  title = 'Counter';
  counter: number = 84;

  change(e){
    this.counter = e;
  }

}
