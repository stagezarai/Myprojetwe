import { Injectable, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id:Number):Food{
    return this.getALL().find(food=>food.id == id)!;
  }
  getAllFoodsByTag(tag: String) : Food[]{
    return tag== "All"?
     this.getALL():
      this.getALL().filter(food=>food.tags?.includes('tag'));

  }

  getALL():Food[]{
  return[
      {id:1,name:'Couscous au poisson',cookTime:'40-50',favorite:false, origins:['TUNISIENNE '], price:25,tags:['slowfood'],imageUrl:'/assets/image/food66.jpg'},
     { id:2,name:'Mloukhia',cookTime:'60-120',favorite:false, origins:['TUNISIENNE'], price:20,tags:['slowfood'],imageUrl:'/assets/image/food33.jpg'},
      {id:3,name:'pate',cookTime:'30-40',favorite:false, origins:['TUNISIENNE, Magreb'], price:15,tags:['slowfood'],imageUrl:'/assets/image/food3.jpg'},
     { id:4,name:'Lablebi',cookTime:'20-30',favorite:false, origins:['TUNISIENNE'], price:5,tags:['slowfood'],imageUrl:'/assets/image/food222.jpg'},
      {id:5,name:'Tajin',cookTime:'30-40',favorite:false, origins:['TUNISIENNE'], price:10,tags:['slowfood'],imageUrl:'/assets/image/food77.jpg'},
     { id:6,name:'Brik',cookTime:'15-25',favorite:false, origins:['TUNISIENNE'], price:8,tags:['fastfood'],imageUrl:'/assets/image/food6.jpg'},
  ]
}
  
  
}