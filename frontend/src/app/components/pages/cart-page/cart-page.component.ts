import { Component, OnInit } from '@angular/core';
import { Cart } from '../../../shared/models/Cart';
import { CardService } from '../../../services/card.service';
import { CartItem } from '../../../shared/models/CartItem';
import { TitleComponent } from "../../partials/title/title.component";
import { NgFor, CurrencyPipe, NgIf } from '@angular/common';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-cart-page',
  imports: [TitleComponent, NgFor, CurrencyPipe, NotFoundComponent, NgIf],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  cart!:Cart;

  constructor(private cardService:CardService){
    this.cardService.getCartObservable().subscribe((cart) =>{
      this.cart = cart;
    })
  }

  ngOnInit(): void {}
   
  // Remove from card
  removeFromCarT(cartItem:CartItem){
    this.cardService.removeFoodFromCart(cartItem.food.id);
  }

  // changeQuantity 
  changeQuantity(cartItem:CartItem, quantityInString:string){
    // Convert quantity string to number
    const quantity = parseInt(quantityInString)
    this.cardService.changeQuantity(cartItem.food.id, quantity);
  }

}
