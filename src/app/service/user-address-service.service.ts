import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAddressServiceService {

  constructor(
  ) { }
  user_address : any[]
  userAddressData(user_address: any){
    this.user_address = user_address;
    console.log("User Address seted    " + this.user_address)
  }

  getUserAddressData(){
    return this.user_address;
  }

}
