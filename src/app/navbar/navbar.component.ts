'use strict'

import { Component } from '@angular/core';
import { ShoppingCartService } from '../shoppingcart-service/shoppingcart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private CartService:ShoppingCartService) {}

  getCartLength(){
    //Return the units in the cart
    return this.CartService.getCartItemsQty();
  }
}
