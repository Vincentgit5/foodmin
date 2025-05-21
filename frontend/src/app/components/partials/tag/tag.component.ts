import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { FoodService } from '../../../services/food.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tag',
  imports: [NgFor, NgIf],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent implements OnInit{

  tags?:Tag[];

   constructor(foodService:FoodService) {
     this.tags = foodService.getAllTags(); // get all tags from the service
   }


  // ngOnInit is a lifecycle hook that is called after the component has been initialized

  ngOnInit(): void {
  }
}
