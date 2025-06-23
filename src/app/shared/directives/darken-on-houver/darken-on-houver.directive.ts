import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[apDarkenOnHouver]',
})
export class DarkenOnHouverDirective{

  @Input() brightness = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover')
  darkenOn(){
    this.renderer.setStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkenOff(){
    this.renderer.setStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
