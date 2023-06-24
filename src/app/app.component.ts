import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  parentId: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // console.log('app');
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.urlAfterRedirects;
        if (currentRoute.includes('/products/')) {
          this.parentId = 1;
        } else {
          this.parentId = 0;
        }
      }
    });
  }
}
