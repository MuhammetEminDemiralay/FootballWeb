import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { League } from '../Model/league';
import { ResponseModel } from '../Model/responseModel';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { LeagueDetail } from '../Model/leagueDetail';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {

  constructor(private httpClient : HttpClient) { }
  
  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<League>>{
    return this.httpClient.get<ListResponseModel<League>>(this.apiUrl + "League/getall")
  }

  addLeague(league : League) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "League/add", league)
  }

  deleteLeague(league : League) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "League/delete", league);
  }

  getLeaguesDetailByCountryId(countryId : number) : Observable<ListResponseModel<LeagueDetail>>{  
    return this.httpClient.get<ListResponseModel<LeagueDetail>>(this.apiUrl + "League/getLeaguesDetailbyCountryId?countryId=" + countryId);
  }     // Selectbox ve country component
  
  getLeagueDetailByLeagueId(leagueId : number) : Observable<SingleResponseModel<LeagueDetail>>{
    return this.httpClient.get<SingleResponseModel<LeagueDetail>>(this.apiUrl + "League/getLeagueDetailByLeagueId?leagueId=" + leagueId)
  }

  leagueUpdate(league : League) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "League/update", league)
  }
  
}
