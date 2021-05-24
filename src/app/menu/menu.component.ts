import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComponent, ListData } from '../list/list.component';
import { SearchComponent } from '../search/search.component';
import { SearchDataService } from '../service/data/search-data.service';
import { SortingServiceService } from '../service/data/sorting-service.service';
import { UserDataService } from '../service/data/user-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

export class SortBy {

}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLoggedIn: boolean = false;

  dob : ''
  joinDate : ''

  constructor(private authentication: HardcodedAuthenticationService,
    private userDataService : UserDataService,
    private serachService : SearchDataService,
    private router : Router,
    private sortingService : SortingServiceService) { }
   
    listData: ListData[];

  ngOnInit() {
    this.isLoggedIn = this.authentication.isUserLoggedIn();
  }

  fetchResults(event : any){
    this.listData = null
    console.log(event.target.value);
    if(event.target.value == ''){
     this.router.navigate(['list'])
    }
     else{
       this.userDataService.searchUser(event.target.value).subscribe(
        response => this.retriveData(response),
    )
     }
  }

  retriveData(response) {
    this.listData = response;
    console.log("In menu" + this.listData)
    this.serachService.searchResult(this.listData);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl('search')
    .then(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    });
  }

  selectValue(event){
    console.log("DropDown value" + event)
    if(event == "DOB"){
      this.userDataService.sortingUser(1,0).subscribe(
        response => this.sorting(response))
    } else if (event == "JOIN") {
      this.userDataService.sortingUser(0,1).subscribe(
        response => this.sorting(response))
    } 
  }

  sorting(response) {
    this.listData = response;
    console.log("In menu" + this.listData)
    this.sortingService.sortinghResult(this.listData);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl('list')
    .then(() => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
    });
  }

}
