import { Directive, ElementRef, AfterViewInit, OnDestroy  } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const options = {
      root: null,
      threshold: 0.2
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible')
        }
      });
    }, options)

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if(this.observer) {
      this.observer.disconnect();
    }
  }

}
