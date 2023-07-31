import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { League } from '../Model/league';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private httpClient : HttpClient) { }
  
  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<League>>{
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl + "League/getall")
  }

  getLeaguesbyCountryId(countryId : number = 0) : Observable<ListResponseModel<League>>{  
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl + "League/getLeaguesbyCountryId?countryId=" + countryId);
  }                                                                      
}
