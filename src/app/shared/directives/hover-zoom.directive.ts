import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverZoom]'
})
export class HoverZoomDirective {
  private originalTransform = '';
  private isHovered = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.originalTransform = this.el.nativeElement.style.transform;
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (!this.isHovered) {
      this.isHovered = true;
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        'scale(1.05)'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'z-index',
        '10'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'transition',
        'transform 0.3s ease, z-index 0.3s ease'
      );
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.isHovered) {
      this.isHovered = false;
      this.renderer.setStyle(
        this.el.nativeElement,
        'transform',
        this.originalTransform || 'scale(1)'
      );
      this.renderer.setStyle(
        this.el.nativeElement,
        'z-index',
        'auto'
      );
    }
  }
}
