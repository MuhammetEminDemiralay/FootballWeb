import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/Environment/environment';
import { SingleResponseModel } from '../Model/singleResponseModel';
import { LeagueImage } from '../Model/leagueImage';
import { ResponseModel } from '../Model/responseModel';
import { CountryImage } from '../Model/countryImage';
import { ClubImage } from '../Model/clubImage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  countryImageAdd(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "CountryImage/add", formData);
  }

  countryImageUpdate(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "CountryImage/update", formData);
  }                                                           

  countryImageDelete(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "CountryImage/delete", formData);
  }
  
  getImageByCountryId(id : number) : Observable<SingleResponseModel<CountryImage>>{
    return this.httpClient.get<SingleResponseModel<CountryImage>>(this.apiUrl + "CountryImage/getCountryImageByCountryId?countryId=" + id)
  }


  leagueImageAdd(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "LeagueImage/add", formData);
  }

  leagueImageUpdate(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "LeagueImage/update", formData);
  }

  getImageByLeagueId(id : number) : Observable<SingleResponseModel<LeagueImage>>{
    return this.httpClient.get<SingleResponseModel<LeagueImage>>(this.apiUrl +  "LeagueImage/getLeagueImagesByLeagueId?leagueId=" + id)
  }

  deleteLeagueImage(image : LeagueImage) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "LeagueImage/delete", image);
  }

  //


  clubImageAdd(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "ClubImage/add", formData);
  }

  clubImageUpdate(formData : FormData) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "ClubImage/update", formData);
  }

  getImageByclubId(id : number) : Observable<SingleResponseModel<ClubImage>>{
    return this.httpClient.get<SingleResponseModel<ClubImage>>(this.apiUrl +  "ClubImage/getClubImageByClubId?clubId=" + id)
  }                                                                            

  deleteClubImage(image : ClubImage) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "ClubImage/delete", image);
  }

}
