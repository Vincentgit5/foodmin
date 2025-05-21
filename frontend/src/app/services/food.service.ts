import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { food_sample, simple_tags } from '../../data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

    // Methode to get all food
  getAllFood():Food[]{
    return food_sample;
  }

  /*
    *  Add a search bar method this methode take all the
    *  food then filter according to the search iten giving in the parametter then filter
  */
  getAllFoodBySearchIten(searchTerm:String){
    return this.getAllFood().filter(food => food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

      // Get all tags: Recupere
      getAllTags():Tag[]{
        return simple_tags;
      }

      // Get all Food by tags
      getAllFoodByTag(tag:String):Food[]{
        return tag === 'All' ? this.getAllFood() : this.getAllFood().filter(food => food.tags?.includes(tag));
       
      }

      // Get food by id
      getFoodById(id:string):Food{
        // find the food with the id in the food_sample array and return it or return a new Food object if not found
        return this.getAllFood().find(food => food.id === id) ?? new Food();
      }

    
}
