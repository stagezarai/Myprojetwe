import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTime:string='';
  constructor( private route:ActivatedRoute, private router:Router ){}
  ngOnInit():void{
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      this.searchTime=params['searchTerm'];
    })
  }
  search():void{
    if(this.searchTime)
    this.router.navigateByUrl('/search/' +this.searchTime);
  }

}
