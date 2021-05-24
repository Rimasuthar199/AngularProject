import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { UserAddress } from '../user-register/user-register.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = ''
  password = ''
  inavlidLogin = false
  errorMeassge = "Invalid Credential !!!"

  constructor(private router: Router,
    private authenticationService: HardcodedAuthenticationService,
    private userDataService : UserDataService) { }

  ngOnInit() {
  }

  handleLogin() {

    this.userDataService.getUserCredentails(this.userName, this.password).subscribe(
      response => {
        this.retriveData(response)
      },
      (error)=>{
        alert("Inavlid Credentials")
      }
    )

    // if (this.authenticationService.authenticate(this.userName, this.password)) {
    //   console.log(this.userName);
    //   this.inavlidLogin = false;
    //   this.router.navigate(['welcome', this.userName])
    // } else {
    //   this.inavlidLogin = true;
    // }
  }
  retriveData(response) {
    this.authenticationService.authenticate(this.userName, this.password)
    this.inavlidLogin = false
    this.router.navigate(['list']);
    console.log("In response" + response)
  }
}
