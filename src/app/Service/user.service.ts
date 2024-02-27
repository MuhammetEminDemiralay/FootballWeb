import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = "https://localhost:44313/api/"

  userUpdate(user : any) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "User/userınfoupdate",user);
  }

  userPasswordUpdate(user : any) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "User/userchangepassword", user);
  }

}
