import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLazyLoad]'
})
export class LazyLoadDirective implements OnInit, OnDestroy {
  @Input() threshold = 0.1;
  @Input() rootMargin = '50px';

  private observer: IntersectionObserver | null = null;
  private isLoaded = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.createObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private createObserver(): void {
    const options = {
      root: null,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.isLoaded) {
          this.loadImage();
        }
      });
    }, options);

    this.observer.observe(this.el.nativeElement);
  }

  private loadImage(): void {
    const img = this.el.nativeElement;
    const src = img.getAttribute('src');
    
    if (src && !this.isLoaded) {
      this.isLoaded = true;
      
      // Add loading class
      this.renderer.addClass(img, 'lazy-loading');
      
      // Create a new image to preload
      const imageLoader = new Image();
      
      imageLoader.onload = () => {
        // Image loaded successfully
        this.renderer.removeClass(img, 'lazy-loading');
        this.renderer.addClass(img, 'lazy-loaded');
        this.renderer.setStyle(img, 'opacity', '1');
      };
      
      imageLoader.onerror = () => {
        // Image failed to load
        this.renderer.removeClass(img, 'lazy-loading');
        this.renderer.addClass(img, 'lazy-error');
        this.renderer.setStyle(img, 'opacity', '0.5');
      };
      
      // Start loading
      imageLoader.src = src;
      
      // Disconnect observer as we no longer need it
      if (this.observer) {
        this.observer.disconnect();
      }
    }
  }
}
