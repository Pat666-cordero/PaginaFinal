import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  api = "https://vast-dusk-77875.herokuapp.com/";
       //https://vast-dusk-77875.herokuapp.com/

  private loggedIn = new BehaviorSubject < boolean > (this.Token.loggedIn() );
  authStatus = this.loggedIn.asObservable();
 
  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
   
  setUser(user){
    localStorage.setItem('currentUser',JSON.stringify(user));
  }

  getUser(){
    return localStorage.getItem('currentUser');
  }
  removeUser(){
    localStorage.removeItem('currentUser');
  }

  
  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }


  constructor(private  Token: TokenService, private http: HttpClient) { }
}
