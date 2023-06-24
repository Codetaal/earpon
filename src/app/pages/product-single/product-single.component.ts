import { ProductService } from '../../services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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

  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.loadProduct();
    });
    // this.id = Number(this.route.snapshot.params['id']);
    // console.log('init');
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
