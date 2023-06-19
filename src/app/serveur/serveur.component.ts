import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.css']
})
export class ServeurComponent implements OnInit {
  question!: string;
  reponse!: string;
  mees!: string;
  constructor(){}
  ngOnInit():void{
    this.question="Vous aimez la cuisine tunisienne?";
    this.reponse="oui";

  }

corr(reponsecli:string){
  if(this.reponse==reponsecli){
    this.mees="Merci beucouq et Bienvenue ";
  }
  else{
    this.mees="ok Merci";
  }

}
}
