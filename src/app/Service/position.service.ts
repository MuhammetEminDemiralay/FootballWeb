import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { ListResponseModel } from '../Model/listResponseModel';
import { Position } from '../Model/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  getAllPosition() : Observable<ListResponseModel<Position>>{
    return this.httpClient.get<ListResponseModel<Position>>(this.apiUrl + "Position/getall");
  }

}
