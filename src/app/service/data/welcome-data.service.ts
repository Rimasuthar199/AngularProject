import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListData } from 'src/app/list/list.component';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {
  constructor(
   private http: HttpClient
  ) { }
  
  executeWelcome() {
    return this.http.get<ListData[]>('http://localhost:8080/user/findUser')
    //console.log("Welcome Service called")
  }

}
