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

  getCartLength(){
    //Return the units in the cart
    return this.CartService.getCartItemsQty();
  }

  getCartPrice(){
    //Return the cart price
    return this.CartService.getCartItemsPrice();
  }

  clearCart(){
    //Clears call items from the cart
    this.CartService.clearCart();
  }
}
