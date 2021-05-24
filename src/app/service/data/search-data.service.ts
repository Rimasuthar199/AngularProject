import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ListData } from 'src/app/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class SearchDataService {

  constructor(private router : Router) { }

  list : ListData[];

  searchResult(list : ListData[]){
      this.list = list;
      console.log("In Search Service  " + this.list)
  }

  fetchSearchresult(){
    return this.list;
  }

}
