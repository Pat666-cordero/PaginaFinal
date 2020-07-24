import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DiciplinasService {

  api = "https://vast-dusk-77875.herokuapp.com/";
  //http://127.0.0.1:8000
  //https://agile-cliffs-84377.herokuapp.com/

  constructor( private http:HttpClient) { }

  private headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',  
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

  index() {
    return this.http.get(this.api + "api/auth/disciplinas", {});
  }

}
