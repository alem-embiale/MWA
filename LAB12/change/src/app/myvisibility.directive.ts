import { OnInit, OnChanges, Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective {

  @Input() showMe: boolean;
  constructor(private elem: ElementRef) {
  }
  ngOnInit(){
    this.display(this.showMe);
  }

  display(show: boolean){
    if(show){
      this.elem.nativeElement.style.display = 'block';
    }else{
      this.elem.nativeElement.style.display = 'none';
    }
  }

  ngOnChanges(changes: SimpleChanges){
    this.display(changes.showMe.currentValue);
  }
}