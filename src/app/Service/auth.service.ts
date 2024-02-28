import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { LocalstorageService } from './localstorage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Register } from '../Model/register';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { TokenModel } from '../Model/tokenModel';
import { Login } from '../Model/login';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService, private localStorageService: LocalstorageService, private httpClient: HttpClient) { }

  apiUrl = "https://localhost:44319/api/"


  register(register: Register): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Authentication/register", register);
  }

  login(login: Login): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl + "Authentication/login", login);
  }

  userId: number;
  user: User;
  token: string | null = ""
  decodedTokenKey: any;

  decodedToken(token: any) {
    return this.jwtHelper.decodeToken(token);

  }

  getUser() {
    let decodedToken = this.decodedToken(localStorage.getItem("_token"));


    if (decodedToken) {

      let tokenInfoName = Object.keys(decodedToken).filter(u => u.endsWith('/name'))[0];
      let userName = String(decodedToken[tokenInfoName]);

      let tokenInfoId = Object.keys(decodedToken).filter(u => u.endsWith('/nameidentifier'))[0];
      let userId = Number(decodedToken[tokenInfoId]);
      this.userId = userId;
      let claimInfo = Object.keys(decodedToken).filter(u => u.endsWith('/role'))[0];
      let roles = decodedToken[claimInfo];

      let tokenInfoEmail = decodedToken.email;

      this.user = {
        userName: userName,
        userId: userId,
        email: tokenInfoEmail,
        roles: roles
      };

    }
    return this.user;
  }


  loggedIn() {
    if (localStorage.getItem("_token")) {
      return this.jwtHelper.isTokenExpired();
    } else {
      return false;
    }
  }

  isAdmin() {
    let isAdmin = false
    if (this.loggedIn())
      if (localStorage.getItem("_token")) {
        let claims = this.user.roles?.toString().split(',')
        claims?.map(role => {
          if (role.toLocaleLowerCase().indexOf("admin") !== -1) {
            isAdmin = true;
          }
        })
      }

    return isAdmin;
  }

  logOut() {
    this.localStorageService.removeToken();
  }


}
