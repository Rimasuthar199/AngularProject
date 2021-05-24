import { Component, OnInit } from '@angular/core';
import { UserAddressServiceService } from '../service/user-address-service.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {

  constructor(private userAddressService: UserAddressServiceService) { }
  userAddress: any[];
  ngOnInit() {
    this.userAddress = this.userAddressService.getUserAddressData();
  }
}
