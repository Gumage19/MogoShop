'use strict'

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartService } from './shoppingcart-service/shoppingcart.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartItemComponent } from './cart-item/cart-item.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'checkout', component: ShoppingCartComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
