import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = "http://localhost:3000/login" //I need web api url 
  newCustomerUrl = "http://localhost:3000/register" // I need web api url
  confirmEmailUrl = "test.com"
  constructor(private http: HttpClient) { }

  login(model:any) {
    return this.http.post(this.authUrl,+ "login", model).pipe(map((response:any) =>{
      const user = response;
      if(user.result.succeeded){localStorage.setItem('token', user.token);
    }
    })
    )
  }
  register(model: any){
    let headers = new HttpHeaders({
      'Email':this.confirmEmailUrl
    })
    let options = { headers: headers};
    return this.http.post(this.newCustomerUrl + 'create', model, options);
  }
}
