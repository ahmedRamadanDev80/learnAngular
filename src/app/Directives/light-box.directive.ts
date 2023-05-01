import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[LightBox]'
})
export class LightBoxDirective implements OnChanges{

@Input() highlightColor:string = 'black';
@Input() defaulttColor:string = 'gold';
  constructor(private elemRef:ElementRef) { }

  ngOnChanges(): void 
  {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaulttColor}`;
  }

  @HostListener('mouseover')onMouseOver()
  {
    this.elemRef.nativeElement.style.border=`3px solid ${this.highlightColor}`;
  }

  @HostListener('mouseout')onMouseOut()
  {
    this.elemRef.nativeElement.style.border=`2px solid ${this.defaulttColor}`;
  }

}
