import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { League } from '../Model/league';
import { ResponseModel } from '../Model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private httpClient : HttpClient) { }
  
  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<League>>{
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl + "League/getall")
  }

  getLeaguesbyCountryId(countryId : number) : Observable<ListResponseModel<League>>{  
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl + "League/getLeaguesbyCountryId?countryId=" + countryId);
  }     
  
  addLeague(league : League) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "League/add", league)
  }

  deleteLeague(league : League) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "League/delete", league);
  }
  
}
