import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBorderColorOnHover]',
  standalone: true
})
export class ChangeBorderColorOnHoverDirective {

  private hoverColor: string = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBorderColor(this.hoverColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBorderColor('#0d6efd');
  }

  private changeBorderColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border', `3px solid ${color}`);
  }
}
