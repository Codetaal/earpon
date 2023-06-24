import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: { class: 'border-l border-gray-900' },
})
export class ProductComponent {
  @Input() product: any;

  constructor(private router: Router) {}

  routeProductSingle(id: number) {
    this.router.navigate(['products', id]);
  }
}
