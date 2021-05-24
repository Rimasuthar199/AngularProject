import { Component, OnInit } from '@angular/core';
import { ListData } from '../list/list.component';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-deactive-user',
  templateUrl: './deactive-user.component.html',
  styleUrls: ['./deactive-user.component.css']
})
export class DeactiveUserComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }
  
  listData: ListData[];

  ngOnInit() {
    this.userDataService.deactiveUser().subscribe(
      response => this.retriveData(response))
  }

  retriveData(response) {
    this.listData = response;
  }

  deleteData(event, id, flag: boolean) {
    console.log("User Delete Id " + id);
      this.userDataService.deletData(id, flag).subscribe((data)=>{
        console.log(data);
        this.ngOnInit();
      });
  }
}
