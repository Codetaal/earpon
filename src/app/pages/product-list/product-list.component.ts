import { Component, OnInit } from '@angular/core';
import {
  ProductInterface,
  ProductsResponseInterface,
} from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  baseUrl: string = './../assets/json/products.json';

  constructor(private productService: ProductService) {}

  product: ProductInterface = {
    cover: 'assets/images/placeholder.jpg',
  };
  products: ProductInterface[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((response: ProductsResponseInterface) => {
        response.data.forEach((product: ProductInterface) => {
          product = { ...this.product, ...product };
          this.products.push(product);
        });
      });
  }
}
