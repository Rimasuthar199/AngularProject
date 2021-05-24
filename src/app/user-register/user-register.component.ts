import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { UserDataService } from '../service/data/user-data.service';

export class Users {


  public id: String | number;
  public first_name: String;
  public last_name: String;
  public email_id: String;
  public date_of_birth: String;
  public joining_date: String;
  public user_address: UserAddress[];
  public user_contact: UserContact[];
  public user_login: UserLogin;

}

export class UserAddress {

  public id: number;
  public user_id: number;
  public city: String;
  public state: String;
  public country: String;
  public zipcode: String;
  public address_1: String;
  public address_2: String;
}

export class UserContact {

  public id: number;
  public user_id: number;
  public contact_no: string;

}

export class UserLogin {

  public id: number;
  public user_id: number;
  public username: string;
  public password: string;

}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor(private userDataService: UserDataService,
    private router: Router) { }

  user: Users = new Users();
  contact: UserContact = new UserContact();
  address: UserAddress = new UserAddress();
  login: UserLogin = new UserLogin();
  contactArray: UserContact[] = [];
  addressArray: UserAddress[] = [];

  ngOnInit() {
  }

  saveUser() {
   
    this.user.user_login = this.login;
    this.addressArray.push(this.address);
    this.user.user_address = this.addressArray;
    this.contactArray.push(this.contact);
    this.user.user_contact = this.contactArray;
    console.log("In save method " + this.user.first_name)
    console.log("In save method " + this.user.last_name)
    console.log("In save method " + this.user.email_id)
    console.log("In save method " + this.user.date_of_birth)
    console.log("In save method " + this.user.joining_date)
    console.log("UserContact " + this.user.user_contact)
    console.log("User Login " + this.user.user_login)
    this.userDataService.saveUser(this.user).subscribe(
      response => {
        this.retriveData(response),
        this.router.navigate(['login']);
          alert("User created successfully.")
      }
    )

  }
  retriveData(response) {
    this.user = response;
  }
}
