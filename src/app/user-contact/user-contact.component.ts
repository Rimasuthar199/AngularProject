import { Component, OnInit } from '@angular/core';
import { UserContact } from '../list/list.component';
import { UserContactService } from '../service/data/user-contact.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

  constructor(private userConatctService : UserContactService) { }

  userContact : UserContact[];
  ngOnInit() {
    this.userContact = this.userConatctService.getContactData();
  }

}
