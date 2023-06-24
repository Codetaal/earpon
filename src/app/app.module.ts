import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ProductSingleComponent,
    ProductListComponent,
    PageNotFoundComponent,
    ReceiptComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
