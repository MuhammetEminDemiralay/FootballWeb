import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { Foot } from '../Model/foot';

@Injectable({
  providedIn: 'root'
})
export class FootService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getAllFoot() : Observable<ListResponseModel<Foot>>{
    return this.httpClient.get<ListResponseModel<Foot>>(this.apiUrl + "Foot/getall")
  }
}
