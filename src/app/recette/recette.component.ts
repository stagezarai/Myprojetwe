import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.css']
})
export class RecetteComponent {

  constructor(){

  }
  save(f: NgForm) :void{ 
    console.log(f.value['login']);
  }
}
