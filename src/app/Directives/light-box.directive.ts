import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective {

@Input() highlightColor:string = 'black';
  constructor(private elemRef:ElementRef) 
  { 
    this.elemRef.nativeElement.style.border='2px solid gold';
  }

  @HostListener('mouseover')onMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout')onMouseOut()
  {
    this.elemRef.nativeElement.style.border='2px solid gold';
  }

}
