import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {
    
   }

   @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {
      let arr: string = this.el.nativeElement.value;
      arr = arr.toUpperCase();
      this.el.nativeElement.value = arr;
   }
  }
}
