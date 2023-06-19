import { Component, OnInit } from '@angular/core';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../sercices/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {

food!: Food;
  constructor(private ActivatedRoute:ActivatedRoute,private foodService:FoodService){
    ActivatedRoute.params.subscribe((params)=>{if (params['id'])
    this.food = foodService.getFoodById(params['id']);
  })
  }
  ngOnInit(): void {
    
  }

}
