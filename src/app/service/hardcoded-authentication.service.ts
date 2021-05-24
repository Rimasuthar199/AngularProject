import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName, password) {
    console.log('User is login ' + this.isUserLoggedIn())
    if (userName === userName && password === password) {
      sessionStorage.setItem('authenticateUser', userName);
      console.log('User is login ' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticateUser')
  }

}
