import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { Country } from '../Model/country';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { CountryImage } from '../Model/countryImage';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getAll() : Observable<ListResponseModel<Country>>{
    return this.httpClient.get<ListResponseModel<Country>>(this.apiUrl + "Country/getall");
  }
}
