'use strict'

import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCartService } from '../shoppingcart-service/shoppingcart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products!:Product[];
  constructor(private CartService: ShoppingCartService) { 
    this.products = CartService.getProducts();
  }
}
