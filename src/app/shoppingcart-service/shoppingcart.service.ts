'use strict'

import { Injectable } from '@angular/core';
import { CartItems } from '../models/CartItems';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  products:Product[] = [
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

  constructor() { }

  getCartData(){
    //Get cart from local storage
    let cartdata = localStorage.getItem('cartdata');
    //Convert to object, if null pass empty object
    let cartitems = cartdata != null?JSON.parse(cartdata):{};
    return cartitems;
  }

  getCartItemPrice(product:Product){
    //Get cart items
    let cartitems:CartItems = this.getCartData();
    //Find item and return the price
    return cartitems[product.name] ? cartitems[product.name].price : 0;    
  }

  getCartItemQty(product:Product){
    //Get cart items
    let cartitems:CartItems = this.getCartData();
    //Find item and return the Quantity
    return cartitems[product.name] ? cartitems[product.name].qty : 0;
  }

  getCartItemsQty(){
    //Get cart items
    let cartItems:CartItems = this.getCartData();
    //Loop through cart and sum the Quantity
    let cartQty: number = 0;
    for (let item in cartItems) {
      cartQty += cartItems[item].qty;
    }
    //Return the summed value
    return cartQty;
  }

  getCartItemsPrice(){
    //Get cart items
    let cartItems:CartItems = this.getCartData();
    //Loop through cart and sum the Price
    let cartPrice: number = 0;
    for (let item in cartItems) {
      cartPrice += cartItems[item].price;
    }
    //Return the summed value
    return cartPrice;
  }

  private setCartData(cartdata:string){
    //Save cart to local storage
    localStorage.setItem('cartdata', cartdata);
  }

  addToCart(product:Product){
    let cartitems:CartItems = this.getCartData();
    //If item exists increase quantity
    if (cartitems.hasOwnProperty(product.name)){
      //Get the Quantity
      let itemqty:number = Number(cartitems[product.name].qty);
      // Add one to Quantity
      cartitems[product.name].qty = ++itemqty;
      //Update the Price
      cartitems[product.name].price = itemqty * product.price;
      //Save the cart
      this.setCartData(JSON.stringify(cartitems));
    }
    else
    {
      //Add product to the cart object
      cartitems[product.name] = {"name":product.name, "qty" : 1, "price": product.price};
      //Save the cart
      this.setCartData(JSON.stringify(cartitems));
    }
  }

  removeFromCart(product:Product){
    //Get cart items
    let cartitems:CartItems = this.getCartData();
    //Get the Quantity
    let itemqty:number = Number(cartitems[product.name].qty);
    //if the Quantity is more than 1 decrease the Quantity.
    if (itemqty > 1){
      // Remove one from the Quantity
      cartitems[product.name].qty = --itemqty;
      //Update the Price
      cartitems[product.name].price = itemqty * product.price;
    }
    else
    {
      //if the Quantity is 1 then delete the line.
      delete cartitems[product.name]
    }
    //Save the cart
    this.setCartData(JSON.stringify(cartitems));
  }

  deleteFromCart(product:Product){
    //Get cart items
    let cartitems:CartItems = this.getCartData();
    //Delete the line of the supplied product
    delete cartitems[product.name];
    //Save the cart
    this.setCartData(JSON.stringify(cartitems));
  }
  
  clearCart(){
    //Delete the localstoreage object
    localStorage.removeItem('cartdata');
  }

  getProducts(){
    //Returns a list of all products
    return this.products;
  }
}
