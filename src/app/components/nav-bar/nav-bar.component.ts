import { Component, HostListener, } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  currentSectionId = 'home';

  constructor(private viewportScroller: ViewportScroller){}


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = Array.from(document.querySelectorAll('section'));
    const navbar = document.querySelector('nav');
    let foundSectionId = '';

    for (const section of sections) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
        foundSectionId = section.getAttribute('id') || '';
        break;
      }
    }
    if (foundSectionId !== ''){
      this.currentSectionId = foundSectionId;
      if (this.currentSectionId !== 'home') {
        navbar?.classList.add('menu-bg')
      } else {
        navbar?.classList.remove('menu-bg')
      }
    }
    
  }

  scrollToSection(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
    this.currentSectionId = sectionId;
  }
}
