import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductSingleComponent } from './pages/product-single/product-single.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { PageNotFoundComponent } from './pages/not-found/not-found.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductSingleComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64], // Optional scroll offset
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
