import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { Club } from '../Model/club';
import { ListResponseModel } from '../Model/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<Club>>{
    return this.httpClient.get<ListResponseModel<Club>>(this.apiUrl + "Club/getall")
  }

  getClubsByLeagueId(leagueId : number = 0) : Observable<ListResponseModel<Club>>{
    return this.httpClient.get<ListResponseModel<Club>>(this.apiUrl + "Club/getClubsByLeagueId?leagueId=" + leagueId)
  }

}
