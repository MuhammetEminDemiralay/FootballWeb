import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { LeagueImage } from '../Model/leagueImage';
import { ResponseModel } from '../Model/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;
  

  leagueImageAdd(formData : FormData) : Observable<any>{
    return this.httpClient.post(this.apiUrl + "LeagueImage/add", formData)
  }

  getImageByImageId(id : number) : Observable<SingleResponseModel<LeagueImage>>{
    return this.httpClient.get<SingleResponseModel<LeagueImage>>(this.apiUrl +  "LeagueImage/getLeagueImagesByLeagueId?leagueId=" + id)
  }

  deleteLeagueImage(image : LeagueImage) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "LeagueImage/delete", image)
  }


}
