import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClubDetail } from 'src/app/Model/clubDetail';
import { Footballer } from 'src/app/Model/footballer';
import { FootballerDetail } from 'src/app/Model/footballerDetail';
import { TransferHistoryDetail } from 'src/app/Model/transferhistorydetail';
import { ClubService } from 'src/app/Service/club.service';
import { FootballerService } from 'src/app/Service/footballer.service';
import { TransferhistoryService } from 'src/app/Service/transferhistory.service';

@Component({
  selector: 'app-footballer',
  templateUrl: './footballer.component.html',
  styleUrls: ['./footballer.component.css']
})
export class FootballerComponent implements OnInit{
  
  constructor(private activatedRoute : ActivatedRoute,
              private footballerService : FootballerService,
              private transferHistoryService : TransferhistoryService,
              private clubService : ClubService
              ){}


  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params =>{
        this.footballerId= params["id"];
        this.getFootballerTransferHistory();
        this.getFootballerDetailByFootballerId();
      })
  }

  footballerId : number;
  footballerDetail : FootballerDetail;
  clubDetail : ClubDetail;
  transferHistoryDetail : TransferHistoryDetail[] = [];
  imageUrl = "https://localhost:44319/";
  noFootballerPhoto = "Images/783c32fcf6fd45bcb5bf8c25c4719636.jpg"
  meter : string;
  centimeter : string;

  getFootballerDetailByFootballerId(){
    this.footballerService.getFootballerDetailByFootballerId(this.footballerId).subscribe(response => {
      this.footballerDetail = response.data;
      this.heightEdit(response.data.height)
      this.getClubDetailByClubId();
    })
  }

  getClubDetailByClubId(){
    this.clubService.getClubDetailByClubId(this.footballerDetail.clubId).subscribe(response => {
      this.clubDetail = response.data;
    })
  }
  
  heightEdit(height : number){
    const heig = height.toString().split("");
    this.centimeter = heig[1] + heig[2];
    this.meter = heig[0]; 
  }

  getFootballerTransferHistory(){
    this.transferHistoryService.getTransferHistoryDetailByFootballerId(this.footballerId).subscribe(response => {
      this.transferHistoryDetail = response.data;     
      console.log(response.data);
       
    })
  }


}
