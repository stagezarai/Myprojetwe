import { Component, OnInit } from '@angular/core';
import { FoodService } from '../sercices/food/food.service';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foods:Food[]=[];
  constructor(private foodService:FoodService,private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      
      this.foods=this.foodService.getALL().filter(food=>
        food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
     else if(params['tag'])
     this.foods = this.foodService. getAllFoodsByTag(params['tag']);
      else
      this.foods=this.foodService.getALL();
    })    
  }

}
