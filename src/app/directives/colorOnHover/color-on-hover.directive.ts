import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorOnHover]',
  standalone: true
})
export class ColorOnHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyColor("#0d6efd");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyColor('#fff');
  }

  private applyColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', `${color}`);
  }
}
