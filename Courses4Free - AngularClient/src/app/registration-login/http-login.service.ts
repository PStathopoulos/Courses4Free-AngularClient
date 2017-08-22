import { Injectable } from '@angular/core';
import { Credentials } from './credentials';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpLoginService {

  private _baseUrl = 'http://localhost:8080/services/students/login';

  public token: string;

  // Injection of Http Module
  constructor( private _http: Http) {
    // Set already saved token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }

  // Method for send credentials to the Backend
  studentLogin(credentials: Credentials): Observable<boolean>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._baseUrl, credentials, options)
    .map((response: Response) => {
                let token = response.json() && response.json().token;
                // Check for successful login, if the jwt token is presented in the JSON
                if (token) {
                    // Assign token
                    this.token = token;

                    // Store username and jwt token in local storage to handle session in FrontEnd and keep user logged in between page refreshes
                    localStorage.setItem('currentUser', credentials.username);
                    localStorage.setItem('jwtToken', this.token);

                    // Finally return true for successful login
                    return true;
                } else {
                    // or return false to indicate failed login
                    return false;
                }
            });
  }

  studentLogout(): void {
        //Remove current user from local storage
        this.token = null;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('jwtToken');
    }

}
