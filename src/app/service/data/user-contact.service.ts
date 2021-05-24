import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserContactService {

  constructor() { }

  user_contact : any[]
  
  userContactData(user_contact: any){
    this.user_contact = user_contact;
    console.log("User Contact seted    " + this.user_contact)
  }

  getContactData(){
    return this.user_contact;
  }
}
