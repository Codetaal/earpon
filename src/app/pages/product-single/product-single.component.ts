import { ProductService } from '../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

import {
  ProductInterface,
  ProductsResponseInterface,
} from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss'],
})
export class ProductSingleComponent implements OnInit, OnDestroy {
  id: number = 0;

  product: ProductInterface = {};
  products: ProductInterface[] = [];
  productState: ProductInterface = {
    cover: 'assets/images/placeholder.jpg',
  };

  productSlideEl!: any;

  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.products = [];
      this.id = +params['id'];
      this.loadProduct();
    });
  }

  ngAfterViewInit(): void {
    this.productSlideEl = document.querySelector('[data-js="product-slider"]');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.productSlideEl.scrollLeft = 0;
      }
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  public loadProduct() {
    this.productService
      .getProducts()
      .subscribe((response: ProductsResponseInterface) => {
        response.data.forEach((product: ProductInterface) => {
          if (product.id === this.id) {
            this.product = { ...this.productState, ...product };
          }
        });
      });

    this.productService
      .getProducts()
      .subscribe((response: ProductsResponseInterface) => {
        response.data.forEach((product: ProductInterface) => {
          product = { ...this.productState, ...product };
          this.products.push(product);
        });
      });
  }
}
