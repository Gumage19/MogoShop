'use strict'

import { Component, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ShoppingCartService } from '../shoppingcart-service/shoppingcart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{
  @Input ('product') product!:Product;
  constructor(private CartService: ShoppingCartService) { }

  addToCart(product:Product){
    //Add the product to the cart
    this.CartService.addToCart(product);
  }

  removeFromCart(product:Product){
    //Remove the product to the cart
    this.CartService.removeFromCart(product);
  }

  getQuantity(product:Product){
    //Return the items cart quantity
    return this.CartService.getCartItemQty(product);
  }

  getPrice(product:Product){
    //Return the items cart price
    return this.CartService.getCartItemPrice(product);
  }

}
