import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[uiInput]'
})
export class InputDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.width = 'auto';
    this.el.nativeElement.style.height = 'auto';
    this.el.nativeElement.style.border = '1px solid rgb(160, 160, 160)';
    this.el.nativeElement.style.borderRadius = '5px';
    this.el.nativeElement.style.outline = 'none';
    this.el.nativeElement.style.padding = '8px 10px';
    this.el.nativeElement.style.marginLeft = '10px';
    this.el.nativeElement.style.marginRight = '10px';
    this.el.nativeElement.style.marginBottom = '10px';
  }

}
