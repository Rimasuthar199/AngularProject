
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchDataService } from '../service/data/search-data.service';
import { SortingServiceService } from '../service/data/sorting-service.service';
import { UserContactService } from '../service/data/user-contact.service';
import { UserDataService } from '../service/data/user-data.service';
import { UserUpdateDataService } from '../service/data/user-update-data.service';
import { UserAddressServiceService } from '../service/user-address-service.service';

export class ListData {

  constructor(
    public id: number,
    public first_name: String,
    public last_name: String,
    public email_id: String,
    public date_of_birth: Date,
    public joining_date: Date,
    public user_address: UserAddress[],
    public user_contact: UserContact[],
    public user_login: UserLogin
  ) { }
}

export class UserAddress {
  constructor(
    public id: number,
    public user_id: number,
    public city: String,
    public state: String,
    public country: String,
    public zipcode: String,
    public address_1: String,
    public address_2: String,
  ) { }
}

export class UserContact {
  constructor(
    public id: number,
    public user_id: number,
    public contact_no: string
  ) { }
}

export class UserLogin {
  constructor(
    public id: number,
    public user_id: number,
    public username: string,
    public password: string
  ) { }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userDataService: UserDataService,
    private userAddressService: UserAddressServiceService,
    private userContactService: UserContactService,
    private router: Router,
    private userUpdate: UserUpdateDataService,
    private searchService: SearchDataService,
    private sortingService : SortingServiceService) { }
    listData: ListData[];


  ngOnInit() {
    this.listData =this.sortingService.fetchSortingesult();
    if(this.listData !=null){
    }  else{
      this.userDataService.getAllUserData().subscribe(
        response => this.retriveData(response))
    }  
  }

  retriveData(response) {
    this.listData = response;
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
      this.userDataService.deletData(id, flag).subscribe((data)=>{
        console.log(data);
        this.ngOnInit();
      });
  }

  updateData(event, id, list: ListData, address: UserAddress[], contact: UserContact[], login: UserLogin) {
    this.router.navigate(['update']);
    this.userUpdate.setUpdateData(list, address, contact, login);
  }
}