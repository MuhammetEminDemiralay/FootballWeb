import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { NationalTeam } from '../Model/nationalTeam';
import { Observable } from 'rxjs';
import { League } from '../Model/league';
import { ResponseModel } from '../Model/responseModel';
import { NationalTeamDetail } from '../Model/nationalTeamDetail';
import { SingleResponseModel } from '../Model/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class NationalteamService {

  
  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getNationalTeamDetailByCountryId(countryId : number) : Observable<ListResponseModel<NationalTeamDetail>>{
    return this.httpClient.get<ListResponseModel<NationalTeamDetail>>(this.apiUrl + "NationalTeam/getnationalteamDetailbycountryıd?countryId=" + countryId);
  }

  getNationalTeamDetailByNationalTeamId(nationalTeamId : number) : Observable<SingleResponseModel<NationalTeamDetail>>{
    return this.httpClient.get<SingleResponseModel<NationalTeamDetail>>(this.apiUrl + "NationalTeam/getnationalteamDetailbyNationalTeamId?nationalTeamId=" + nationalTeamId);
  }

  addNationalTeam(nationalTeam : NationalTeam) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/add", nationalTeam)
  }

  deleteNationalTeam(nationalTeam : NationalTeamDetail) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/delete", nationalTeam)
  }

  updateNationalTeam(nationalTeam : NationalTeam) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/update", nationalTeam)
  }


}
