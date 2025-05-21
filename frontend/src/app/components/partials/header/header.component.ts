import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../services/card.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  constructor(cartService:CardService) {
// Subscribe to the cart observable to get the latest cart quantity
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });


  }
  

  ngOnInit(): void { }

  

}
