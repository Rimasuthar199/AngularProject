import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListData, UserLogin } from 'src/app/list/list.component';
import { Users } from 'src/app/user-register/user-register.component'

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private http: HttpClient) { }

  getAllUserData() {
    return this.http.get<ListData[]>('http://localhost:8080/user/findUser')
  }

  saveUser(user: Users) {
    return this.http.post<Users>('http://localhost:8080/user/saveUser', user);
  }

  deletData(id, flag) {
    const opts = { params: new HttpParams({ fromString: `soft_del=${flag}` }) };
    console.log("Before Endpoint Call " + id);
    return this.http.delete(`http://localhost:8080/user/delete/${id}`, opts);
  }

  updateUser(list : ListData){
    return this.http.put<ListData>('http://localhost:8080/user/editUser', list);
  }

  searchUser(param) {
    const opts = { params: new HttpParams({ fromString: `firstName=${param}&pincode=${param}&lastName=${param}`}) };
    return this.http.get<ListData[]>(`http://localhost:8080/user/search`, opts);
  }

  getUserCredentails(username, password) {
    const opts = { params: new HttpParams({ fromString: `userName=${username}&password=${password}`}) };
    return this.http.get<Users>('http://localhost:8080/user/login', opts);
  }

  sortingUser(dob, joinDate){
    const opts = { params: new HttpParams({ fromString: `sortByDob=${dob}&sortByJoiningDate=${joinDate}`}) };
    return this.http.get<ListData[]>(`http://localhost:8080/user/findUser`,opts)
  }

  deactiveUser(){
    return this.http.get<ListData[]>('http://localhost:8080/user/deactivate')
  }

}

