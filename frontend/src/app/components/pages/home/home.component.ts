import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { NgFor, CurrencyPipe} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagComponent } from '../../partials/tag/tag.component';
import { NotFoundComponent } from "../../partials/not-found/not-found.component";



@Component({
  selector: 'app-home',
  imports: [NgFor, CurrencyPipe, SearchComponent, TagComponent, NotFoundComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  foods:Food[]=[]; 
                       // Injection des dependances 
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
      // Anytime the param change, call the function inside the suscribe 
      activatedRoute.params.subscribe((params) => {
        // solve the error by "noPropertyAccessFromIndexSignature": false, in tsconfig.json
         if(params.searchTerm){
          this.foods = this.foodService.getAllFoodBySearchIten(params.searchTerm); // if param exist the search an return the list
         } else if(params.tag) {
          this.foods = this.foodService.getAllFoodByTag(params.tag); // if the parametre is a tag then apply the filter by tag
         } else{
          this.foods = foodService.getAllFood(); // else return the list of food
         }
      });
    
  }

  

  ngOnInit():void{

  }
}
