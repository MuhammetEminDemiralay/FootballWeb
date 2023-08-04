import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { NationalTeam } from '../Model/nationalTeam';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NationalteamService {

  
  constructor(private httpClient : HttpClient) { }
  apiUrl = environment.apiUrl;

  getNationalTeamByCountryId(countryId : number) : Observable<ListResponseModel<NationalTeam>>{
    return this.httpClient.get<ListResponseModel<NationalTeam>>(this.apiUrl + "NationaTeam/getnationalteamsbycountryıd?countryId=" + countryId);
  }


}
