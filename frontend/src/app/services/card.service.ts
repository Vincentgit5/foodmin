import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/Food';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  // Cart object to be used in the cart component
  private cart: Cart = this.getCartFromLocalStorage();
  // Cart subject to be used in the cart component
  // to get the cart data in the cart component
  private cardSubject: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  constructor() {  }
   
  // Method to add the food to the cart data
  addToCart(food:Food): void{
    /* Check if the food is already in the cart If it is, increase the quantity
     If it is not, add it to the cart */
      let cartItem = this.cart.items.find(item => item.food.id === food.id);
      if(cartItem)
        return;
      // If the food is not in the cart, add it to the cart
      this.cart.items.push(new CartItem(food));
      this.setCartToLocalStorage();
      }

       // Remove the food from the cart
       removeFoodFromCart(foodId:String): void{
        // Check if the food is in the cart
        this.cart.items = this.cart.items.filter(item => item.food.id !== foodId);
        this.setCartToLocalStorage();
      }

       //Change the quantity of the food in the cart
       changeQuantity(foodId:String, quantity:number): void{
        // Check if the food is in the cart
        let cartItem = this.cart.items.find(item => item.food.id === foodId);
        if(!cartItem) return;
        // If the food is in the cart, change the quantity
          cartItem.quantity = quantity;
          // If the quantity is 0, remove the food from the cart
          cartItem.price = cartItem.food.price * quantity;
          this.setCartToLocalStorage();
       }

       // Clear the cart
        clearCart(): void{
          this.cart = new Cart();
          this.setCartToLocalStorage();
        }

        // GetCartObservable
        getCartObservable(){
          // Update the cart subject with the new cart data
          return this.cardSubject.asObservable();
        }

        private setCartToLocalStorage(): void{
          // Check if the cart is empty 
          this.cart.totalPrice = this.cart.items.reduce((prevSum, curentItem) => prevSum + curentItem.price, 0);
          // Set the total price of the cart
          this.cart.totalCount = this.cart.items.reduce((prevSum, curentItem) => prevSum + curentItem.quantity, 0);
          // Set the cart to local storage
          localStorage.setItem('cart', JSON.stringify(this.cart));
          this.cardSubject.next(this.cart);
        }

        // Get the cart from local storage
        private getCartFromLocalStorage(): Cart {
          try {
              let cartJson = localStorage.getItem('cart');
              return cartJson ? JSON.parse(cartJson) : new Cart();
          } catch (error) {
              console.error('Error parsing cart data from local storage:', error);
              return new Cart();
          }
      }
        

}
