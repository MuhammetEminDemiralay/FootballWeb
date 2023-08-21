import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { Footballer } from '../Model/footballer';
import { ListResponseModel } from '../Model/listResponseModel';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { FootballerDetail } from '../Model/footballerDetail';

@Injectable({
  providedIn: 'root'
})
export class FootballerService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<Footballer>>{
    return this.httpClient.get<ListResponseModel<Footballer>>(this.apiUrl + "Footballer/getall")
  }

  getFootballersDetailByClubId(clubId : number) : Observable<ListResponseModel<FootballerDetail>>{
    return this.httpClient.get<ListResponseModel<FootballerDetail>>(this.apiUrl + "Footballer/getFootballersDetailByClubId?clubId=" + clubId)
  }

  getFootballer(footballerId : number = 0) : Observable<SingleResponseModel<Footballer>>{
    return this.httpClient.get<SingleResponseModel<Footballer>>(this.apiUrl + "Footballer/get?id=" + footballerId)
  }
  
}
