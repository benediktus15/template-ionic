import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class User {

  email: string;
  password: string;

  constructor( email: string, password: string) {
    this.email = email;
    this.password = password;
  }

}

@Injectable()
export class AuthServiceProvider {

  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials")
    } else {
      return Observable.create(observer => {
        let access = (credentials.email === "ben" && credentials.password === "123")
        this.currentUser = new User('ben@dev.co', 'ben');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
    } else {
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  constructor() {
    console.log('Hello AuthServiceProvider Provider');
  }
  
  public loguot() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

}
