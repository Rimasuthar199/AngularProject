import { Injectable } from '@angular/core';
import { ListData } from 'src/app/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class SortingServiceService {

  constructor() { }


  list : ListData[];

  sortinghResult(list : ListData[]){
      this.list = list;
      console.log("In Sorting Service  " + this.list)
  }

  fetchSortingesult(){
    return this.list;
  }
}
