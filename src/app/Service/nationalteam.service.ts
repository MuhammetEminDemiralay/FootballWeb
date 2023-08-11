import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { NationalTeam } from '../Model/nationalTeam';
import { Observable } from 'rxjs';
import { League } from '../Model/league';
import { ResponseModel } from '../Model/responseModel';
import { NationalTeamDetail } from '../Model/nationalTeamDetail';

@Injectable({
  providedIn: 'root'
})
export class NationalteamService {

  
  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getNationalTeamDetailByCountryId(countryId : number) : Observable<ListResponseModel<NationalTeamDetail>>{
    return this.httpClient.get<ListResponseModel<NationalTeamDetail>>(this.apiUrl + "NationalTeam/getnationalteamDetailbycountryıd?countryId=" + countryId);
  }

  addNationalTeam(nationalTeam : NationalTeam) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/add", nationalTeam)
  }

  deleteNationalTeam(nationalTeam : NationalTeam) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/delete", nationalTeam)
  }

  updateNationalTeam(nationalTeam : NationalTeam) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "NationalTeam/update", nationalTeam)
  }


}
