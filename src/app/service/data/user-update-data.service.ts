import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ListData, UserAddress, UserContact, UserLogin } from 'src/app/list/list.component';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateDataService {

  constructor(private router : Router) { }

  lisData : ListData
  contactArray: UserContact[] = [];
  addressArray: UserAddress[] = [];
  login : UserLogin
  singleAddress : UserAddress;

  setUpdateData(list :ListData, address :UserAddress[], contact : UserContact[], login : UserLogin){
    this.lisData = list;
    this.lisData.user_contact = contact;
    this.lisData.user_address = address;
    this.login = login;
    this.getUpdateData();
  }

  getUpdateData(){
    return this.lisData;
  }

}
