import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../Services/jarwis.service';
import { TokenService } from '../Services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { HttpClient } from '@angular/common/http';
//import { JarwisService } from '../../services/jarwis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //esto de public

  public form = {
    email : null, 
    password : null
  }
  //
  public error = null;
  // en el constructor
  constructor( 
    private Jarwis:JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
     ) { }
 //private http: HttpClient
  //esto
  onSubmit(){
    /*return this.http.post('http://127.0.0.1:8000/api/auth/login',this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );*/
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );

  }

  //esto agregando

  handleResponse(data){
    //console.log(">>", data);
    this.Token.handle(data.access_token); 
    this.Auth.changeAuthStatus(true);
    this.Auth.setUser(data.user);
    this.router.navigateByUrl('/inicio');
  }
  handleError(error){
    this.error = error.error.error;
  }
  

  ngOnInit(): void {
  }
  

}
