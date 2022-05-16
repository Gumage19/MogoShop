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

  /* 
  * Description: Add the product to the cart.
  * Parameters: Product
  * Returns: void
  */  
  addToCart(product:Product){
    this.CartService.addToCart(product);
  }

  /* 
  * Description: Remove the product to the cart.
  * Parameters: Product
  * Returns: void
  */    
  removeFromCart(product:Product){
    this.CartService.removeFromCart(product);
  }

  /* 
  * Description: Return the items cart quantity.
  * Parameters: Product
  * Returns: number
  */    
  getQuantity(product:Product){
    return this.CartService.getCartItemQty(product);
  }

  /* 
  * Description: Return the items cart price.
  * Parameters: Product
  * Returns: number
  */     
  getPrice(product:Product){
    return this.CartService.getCartItemPrice(product);
  }

}
