'use strict'

import { Component } from '@angular/core';
import { CartItems } from '../models/CartItems';
import { ShoppingCartService } from '../shoppingcart-service/shoppingcart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartData!:CartItems;

  constructor(private CartService:ShoppingCartService) {
    this.cartData = CartService.getCartData();
  }

  /* 
  * Description: Returns the units in the cart.
  * Parameters: none
  * Returns: number
  */  
  getCartLength(){
    return this.CartService.getCartItemsQty();
  }

  /* 
  * Description: Returns the total price of all lines in the cart.
  * Parameters: none
  * Returns: number
  */  
  getCartPrice(){
    return this.CartService.getCartItemsPrice();
  }

  /* 
  * Description: Clears call items from the cart.
  * Parameters: none
  * Returns: void
  */  
  clearCart(){
    this.CartService.clearCart();
  }
}
