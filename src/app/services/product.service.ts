import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  ProductInterface,
  ProductResponseInterface,
  ProductsResponseInterface,
} from 'src/app/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  // public getProduct(id: number): ProductInterface {
  //   const products: ProductInterface[] = [];
  //   const product: ProductInterface = {};

  //   this.getProducts().subscribe((response: ProductsResponseInterface) => {
  //     response.data.find((product: ProductInterface) => {
  //       return product.id === id;
  //     });
  //   });

  //   return product;
  // }

  public getProducts(): Observable<ProductsResponseInterface> {
    return this.httpClient
      .get<ProductsResponseInterface>(`./../assets/json/products.json`)
      .pipe(shareReplay());
  }
}
