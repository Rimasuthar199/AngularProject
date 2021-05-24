import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListData, UserAddress, UserContact, UserLogin } from '../list/list.component';
import { SearchDataService } from '../service/data/search-data.service';
import { UserContactService } from '../service/data/user-contact.service';
import { UserDataService } from '../service/data/user-data.service';
import { UserUpdateDataService } from '../service/data/user-update-data.service';
import { UserAddressServiceService } from '../service/user-address-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService : SearchDataService,
    private userDataService: UserDataService,
    private userAddressService:  UserAddressServiceService,
    private userContactService : UserContactService,
    private userUpdate: UserUpdateDataService ,
    private router : Router) { }

    listData : ListData[];

  ngOnInit() {
    console.log("In search service")
  
    this.listData =this.searchService.fetchSearchresult();
  }

  setUserAddress(event, user_address: any) {
    console.log("In list classs      " + user_address)
    this.userAddressService.userAddressData(user_address);
  }

  setUserContact(event, user_contact: any) {
    console.log("In list classs      " + user_contact)
    this.userContactService.userContactData(user_contact);
  }

  deleteData(event, id, flag: boolean) {
    console.log("User Delete Id " + id);
      this.userDataService.deletData(id, flag).subscribe(this.ngOnInit);
  }

  updateData(event, id, list: ListData, address: UserAddress[], contact: UserContact[], login: UserLogin) {
    this.router.navigate(['update']);
    this.userUpdate.setUpdateData(list, address, contact, login);
  }

}
