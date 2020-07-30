import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {

  private baseUrl = 'https://vast-dusk-77875.herokuapp.com/api';
  //http://127.0.0.1:8000/api
  constructor( private http: HttpClient) { }
 
  login(data){
    return this.http.post(`${this.baseUrl}/auth/login`, data)
  }
}
