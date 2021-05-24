import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListData, UserAddress, UserContact, UserLogin } from '../list/list.component';
import { UserDataService } from '../service/data/user-data.service';
import { UserUpdateDataService } from '../service/data/user-update-data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private userUpdate : UserUpdateDataService,
    private userDataService :UserDataService,
    private router : Router) { }

  list : ListData;
  userLogin : UserLogin;
  userAddress : UserAddress [];
  userContact : UserContact[];
  singleAddress : UserAddress
  singleContact : UserContact

  ngOnInit() {
    this.list = this.userUpdate.getUpdateData();
    this.userLogin = this.list.user_login;
    this.userAddress = this.list.user_address;
    this.userContact = this.list.user_contact;
    this.singleAddress = this.userAddress[0];
    this.singleContact = this.userContact[0];
   
  }

  updateUser(){
    console.log(this.singleAddress.address_1);
    this.list.user_login =this.userLogin;
    this.list.user_address = this.userAddress;
    this.list.user_contact = this.userContact ;
    
    this.userDataService.updateUser(this.list).subscribe(
      response => {
        this.router.navigate(['list']);
        alert("User Updated successfully.")
       
      }
    )
  }
}
