import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/Environment/environment';
import { TransferHistory } from '../Model/transferHistory';
import { Observable } from 'rxjs';
import { ResponseModel } from '../Model/responseModel';
import { ListResponseModel } from '../Model/listResponseModel';
import { TransferHistoryDetail } from '../Model/transferhistorydetail';

@Injectable({
  providedIn: 'root'
})
export class TransferhistoryService {

  constructor(private httpClient : HttpClient) { }

  apiUrl = environment.apiUrl;

  addTransferHistory(transferHistory : TransferHistory) : Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl + "TransferHistory/add", transferHistory)
  }

  getTransferHistoryDetailByFootballerId(footballerId : number) : Observable<ListResponseModel<TransferHistoryDetail>>{
    return this.httpClient.get<ListResponseModel<TransferHistoryDetail>>(this.apiUrl + "TransferHistory/gettransferhistorybyfootballerıd?footbalerId=" + footballerId)
  }
}
