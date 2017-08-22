import { Component } from '@angular/core';
import { Credentials } from './credentials';
import { HttpLoginService} from './http-login.service'
import { Router } from '@angular/router';

//Component useful for login operation of the student against RESTful API database
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls:  ['./logincomponent.css']
})

export class LoginComponent {
  //Initialization of Credentials
  credentials: Credentials = {
    username:'',
    password:''
    };
  errorMessage: string;

  // Injection of HttpLoginService
  constructor(private _httpService: HttpLoginService, private _router: Router){}

  // Lifecycle hook-method for reset state of the currentUser
  ngOnInit() {
        // Reset login status
        this._httpService.studentLogout();
    }

   // Method uses httpService's studentLogin after credentials submission
   onLogin(): void {
     this._httpService.studentLogin(this.credentials)
    .subscribe(response => {
                if (response === true) {
                    // When login successful
                    this._router.navigate(['/']);
                } else {
                    // When login failed
                    this.errorMessage = 'Incorrect credentials';
                }
            });
     }

  }
