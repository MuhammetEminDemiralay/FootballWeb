import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { City } from '../Model/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getCityByCountryId(countryId : number) : Observable<ListResponseModel<City>>{
    return this.httpClient.get<ListResponseModel<City>>(this.apiUrl + "City/getCityByCountryId?countryId=" + countryId);
  }
  
}
