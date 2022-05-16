'use strict'

import { Component, Input } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';
import { ShoppingCartService } from '../shoppingcart-service/shoppingcart.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  products!:Product[];
  @Input ('cartItem') cartItem!:CartItem;
  constructor(private CartService: ShoppingCartService) {
    this.products = CartService.getProducts();
  }

  private getProduct(cartItem:CartItem){
    //Find the product that relates to the CartItem product
     return this.products.find(
      (prod) => 
      prod.name === cartItem.name
    )!;    
  }

  addToCart(cartItem:CartItem){
    //get the matching product
    let product:Product = this.getProduct(cartItem);
    //Add the product to the cart
    this.CartService.addToCart(product);
  }

  removeFromCart(cartItem:CartItem){
    //get the matching product
    let product:Product = this.getProduct(cartItem);
    //Remove the product to the cart
    this.CartService.removeFromCart(product);
  }

  deleteFromCart(cartItem:CartItem){
    //get the matching product
    let product:Product = this.getProduct(cartItem);
    //Delete the product from the cart
    this.CartService.deleteFromCart(product);
  }

  getQuantity(cartItem:CartItem){
    //get the matching product
    let product:Product = this.getProduct(cartItem);
    //Return the items cart quantity
    return this.CartService.getCartItemQty(product);
  }

  getPrice(cartItem:CartItem){
    //get the matching product
    let product:Product = this.getProduct(cartItem);
    //Return the items cart price
    return this.CartService.getCartItemPrice(product);
  }

}
