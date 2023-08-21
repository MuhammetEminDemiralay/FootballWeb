import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { Club } from '../Model/club';
import { ListResponseModel } from '../Model/listResponseModel';
import { Observable } from 'rxjs';
import { ClubDetail } from '../Model/clubDetail';
import { SingleResponseModel } from '../Model/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<Club>>{
    return this.httpClient.get<ListResponseModel<Club>>(this.apiUrl + "Club/getall");
  }

  getClubsByLeagueId(leagueId : number) : Observable<ListResponseModel<Club>>{
    return this.httpClient.get<ListResponseModel<Club>>(this.apiUrl + "Club/getClubsByLeagueId?leagueId=" + leagueId);
  }

  getClubsDetailByLeagueId(leagueId : number) : Observable<ListResponseModel<ClubDetail>>{
    return this.httpClient.get<ListResponseModel<ClubDetail>>(this.apiUrl + "Club/getClubsDetailByLeagueId?leagueId=" + leagueId);
  }

  getClubDetailByClubId(clubId : number) : Observable<SingleResponseModel<ClubDetail>>{
    return this.httpClient.get<SingleResponseModel<ClubDetail>>(this.apiUrl + "Club/getClubDetailByClubId?clubId=" + clubId);
  }

}
