import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userProfile: any;
  authenticated: boolean;
  constructor() { this.authenticated = false; }

  login() {
    // Auth0 authorize request
    console.log('attempting login...');
    // this.auth0.authorize();
    this.authenticated = true;
  }

  logout() {
    // Auth0 authorize request
    console.log('attempting login...');
    // this.auth0.authorize();
    this.authenticated = false;
  }
}
