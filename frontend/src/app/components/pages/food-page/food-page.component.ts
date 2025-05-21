import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { NgFor, CurrencyPipe, NgIf} from '@angular/common';
import { CardService } from '../../../services/card.service';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";

@Component({
  selector: 'app-food-page',
  imports: [NgFor, CurrencyPipe, NotFoundComponent, NgIf],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!:Food
  constructor(activatedRoute:ActivatedRoute, foodService:FoodService,
    private cardService:CardService,private router:Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  addToCart() {
    // Call the addToCart method from the cardService 
    this.cardService.addToCart(this.food);
    // Redirect to the cart page
    this.router.navigateByUrl('/cart-page');
  }


}
