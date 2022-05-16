'use strict'

import { Injectable } from '@angular/core';
import { CartItems } from '../models/CartItems';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products:Product[] 

  constructor() {
    this.products = [
      {
      name: 'Sledgehammer',
      price: 125.75
      },
      {
      name: 'Axe',
      price: 190.50
      },
      {
      name: 'Bandsaw',
      price: 562.13
      },
      {
      name: 'Chisel',
      price: 12.9
      },
      {
      name: 'Hacksaw',
      price: 18.45
      }
    ];
  }

  /* 
  * Description: Get cart from local storage.
  * Parameters: none
  * Returns: CartItems
  */
  getCartData(){
    const cartdata = localStorage.getItem('cartdata');
    const cartitems = cartdata != null?JSON.parse(cartdata):{};
    return cartitems;
  }

  /* 
  * Description: Get the line price for a cart item.
  * Parameters: Product
  * Returns: number
  */
  getCartItemPrice(product:Product){
    const cartitems:CartItems = this.getCartData();
    return cartitems[product.name] ? cartitems[product.name].price : 0;    
  }

  /* 
  * Description: Get the line quantity for a cart item.
  * Parameters: Product
  * Returns: number
  */
  getCartItemQty(product:Product){
    const cartitems:CartItems = this.getCartData();
    return cartitems[product.name] ? cartitems[product.name].qty : 0;
  }

  /* 
  * Description: Get the total quantity for the cart.
  * Parameters: none
  * Returns: number
  */ 
  getCartItemsQty(){
    const cartItems:CartItems = this.getCartData();
    let cartQty: number = 0;
    for (let item in cartItems) {
      cartQty += cartItems[item].qty;
    }
    return cartQty;
  }

  /* 
  * Description: Get the total price for the cart.
  * Parameters: none
  * Returns: number
  */ 
  getCartItemsPrice(){
    const cartItems:CartItems = this.getCartData();
    let cartPrice: number = 0;
    for (let item in cartItems) {
      cartPrice += cartItems[item].price;
    }
    return cartPrice;
  }

  /* 
  * Description: Save cart to local storage.
  * Parameters: string
  * Returns: void
  */
  private setCartData(cartdata:string){
    localStorage.setItem('cartdata', cartdata);
  }

  /* 
  * Description: Works out if the item exists in the card add increases the value or adds the item to the cart.
  * Parameters: Product
  * Returns: void
  */
  addToCart(product:Product){
    const cartitems:CartItems = this.getCartData();
    if (cartitems.hasOwnProperty(product.name)){
      let itemqty:number = Number(cartitems[product.name].qty);
      cartitems[product.name].qty = ++itemqty;
      cartitems[product.name].price = itemqty * product.price;
      this.setCartData(JSON.stringify(cartitems));
    }
    else
    {
      cartitems[product.name] = {"name":product.name, "qty" : 1, "price": product.price};
      this.setCartData(JSON.stringify(cartitems));
    }
  }

  /* 
  * Description: Decreases the cart value of a item, if the value is zero then it will be removed.
  * Parameters: Product
  * Returns: void
  */
  removeFromCart(product:Product){
    let cartitems:CartItems = this.getCartData();
    let itemqty:number = Number(cartitems[product.name].qty);
    if (itemqty > 1){
      cartitems[product.name].qty = --itemqty;
      cartitems[product.name].price = itemqty * product.price;
    }
    else
    {
      delete cartitems[product.name]
    }
    this.setCartData(JSON.stringify(cartitems));
  }

  /* 
  * Description: Removes a product from the cart.
  * Parameters: Product
  * Returns: void
  */
  deleteFromCart(product:Product){
    const cartitems:CartItems = this.getCartData();
    delete cartitems[product.name];
    this.setCartData(JSON.stringify(cartitems));
  }
  
  /* 
  * Description: Removes the cart object from localstorage.
  * Parameters: none
  * Returns: void
  */ 
  clearCart(){
    localStorage.removeItem('cartdata');
  }

  /* 
  * Description: Returns a list of all products.
  * Parameters: none
  * Returns: List of Product
  */ 
  getProducts(){
    return this.products;
  }
}
