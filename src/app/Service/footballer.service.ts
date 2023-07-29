import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { Footballer } from '../Model/footballer';
import { ListResponseModel } from '../Model/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballerService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<Footballer>>{
    return this.httpClient.get<ListResponseModel<Footballer>>(this.apiUrl + "Footballer/getall")
  }
}
