import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() parentId: number = 0;

  header!: any;
  mainEl!: any;
  menuIconEl!: any;
  shadowHeaderEl: any = document.createElement('div');
  headerElHeight: number = 0;
  headerElOffsetdHeight: number = 0;

  constructor(private hostElement: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.header.classList.remove('is-active');
      }
    });
  }

  ngAfterViewInit(): void {
    this.header = document.querySelector('[data-js="header"]');
    this.mainEl = document.querySelector('[data-js="main"]');
    this.menuIconEl = document.querySelector('[data-js="menuIcon"]');

    this.setHeaderStyle();

    this.shadowHeaderEl.style.cssText = `
        height: ${this.headerElHeight + 'px'};
        opacity: 0;
        visibility: hidden;
    `;
    this.shadowHeaderEl.dataset['js'] = 'header-placeholder';

    this.hostElement.nativeElement.insertBefore(
      this.shadowHeaderEl,
      this.header
    );
    this.header.classList.add('fixed');

    document.addEventListener('scroll', () => {
      // let offset = parseFloat(this.mainEl.offsetTop) - this.headerElHeight;
      // console.log(
      //   window.scrollY,
      //   parseFloat(this.mainEl.offsetTop),
      //   this.headerElHeight
      // );
      if (window.scrollY > this.headerElOffsetdHeight) {
        this.header.dataset['isFixed'] = true;
        this.header.classList.add('is-fixed');
      } else if (window.scrollY <= this.headerElOffsetdHeight) {
        this.header.dataset['isFixed'] = false;
        this.header.classList.remove('is-fixed');
      }
    });

    window.addEventListener('resize', () => {
      this.setHeaderStyle();
      this.shadowHeaderEl.style.height = this.headerElHeight + 'px';
    });

    this.menuIconEl.addEventListener('touchend', () => {
      if (!this.header.classList.contains('is-active')) {
        this.header.classList.add('is-active');
      } else {
        this.header.classList.remove('is-active');
      }
    });

    this.header.addEventListener('mouseenter', (event: Event) => {
      this.header.classList.add('is-active');
    });

    this.header.addEventListener('mouseleave', (event: Event) => {
      this.header.classList.remove('is-active');
    });
  }

  public setHeaderStyle() {
    this.headerElHeight = parseFloat(this.header.clientHeight);
    this.headerElOffsetdHeight =
      parseFloat(getComputedStyle(this.header).paddingTop) +
      parseFloat(getComputedStyle(this.header).paddingBottom);
  }

  public routeProducts() {
    this.router.navigate(['products']);
  }
}
