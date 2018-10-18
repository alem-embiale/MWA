import { Directive, Input, Output, HostListener, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMynewcolor]'
})
export class MynewcolorDirective {

  @Input('newColor') color: string;
  @Output() colorEvent = new EventEmitter();
  constructor(private el: ElementRef) { }

  @HostListener('click') onClick(){
    this.el.nativeElement.style.color = this.color;
    this.colorEvent.emit(this.color);
  }

}