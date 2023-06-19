import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  @Input() questionse!: string;
  reponsecli!: string; 
  @Output() repofinal = new EventEmitter<string>();
constructor(){}

ngOnInit():void{

}
envrep(){
  this.repofinal.emit(this.reponsecli);
}
}
