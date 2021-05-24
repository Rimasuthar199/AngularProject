import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private welcomeservice: WelcomeDataService) { }

  ngOnInit() {
    console.log(this.router.snapshot.params['name'])
  }

  generateMessage() {

    this.welcomeservice.executeWelcome().subscribe(
      response => this.handleResponse(response),
      error=> this.handleError(error)
    );
    console.log("Welcome response");
  }

  handleResponse(response){
    console.log(response);
  }


  handleError(error){

  }
}