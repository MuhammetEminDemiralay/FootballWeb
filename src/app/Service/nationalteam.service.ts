import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { NationalTeam } from '../Model/nationalTeam';
import { Observable } from 'rxjs';
import { League } from '../Model/league';
import { ResponseModel } from '../Model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class NationalteamService {

  
  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getNationalTeamByCountryId(countryId : number) : Observable<ListResponseModel<NationalTeam>>{
    return this.httpClient.get<ListResponseModel<NationalTeam>>(this.apiUrl + "NationalTeam/getnationalteamsbycountryıd?countryId=" + countryId);
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
